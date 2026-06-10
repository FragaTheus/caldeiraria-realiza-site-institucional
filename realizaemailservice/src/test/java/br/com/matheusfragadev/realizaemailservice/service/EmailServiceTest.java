package br.com.matheusfragadev.realizaemailservice.service;

import br.com.matheusfragadev.realizaemailservice.controller.mail.EmailRequest;
import br.com.matheusfragadev.realizaemailservice.service.mail.EmailException;
import br.com.matheusfragadev.realizaemailservice.service.mail.EmailService;
import jakarta.mail.BodyPart;
import jakarta.mail.Multipart;
import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Base64;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EmailServiceTest {

    @Mock
    private JavaMailSender javaMailSender;

    private EmailService emailService;

    @BeforeEach
    void setUp() {
        emailService = new EmailService(javaMailSender);
        ReflectionTestUtils.setField(emailService, "to", "contato@caldeirariarealiza.com.br");
    }

    @Test
    void sendEmailShouldSendWithoutAttachment() throws Exception {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Quero um orcamento",
                null, null
        );

        emailService.sendEmail(request);

        ArgumentCaptor<MimeMessage> captor = ArgumentCaptor.forClass(MimeMessage.class);
        verify(javaMailSender).send(captor.capture());

        MimeMessage sent = captor.getValue();
        assertEquals("Contato - Matheus", sent.getSubject());
        assertEquals("contato@caldeirariarealiza.com.br", sent.getAllRecipients()[0].toString());
        assertEquals("matheus@email.com", sent.getReplyTo()[0].toString());
        assertTrue(sent.getContent().toString().contains("Novo contato recebido"));
        assertTrue(sent.getContent().toString().contains("Nome: Matheus"));
    }

    @Test
    void sendEmailShouldSendWithAttachment() throws Exception {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        String base64 = Base64.getEncoder().encodeToString("conteudo".getBytes());

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Segue anexo",
                base64, "arquivo.txt"
        );

        emailService.sendEmail(request);

        ArgumentCaptor<MimeMessage> captor = ArgumentCaptor.forClass(MimeMessage.class);
        verify(javaMailSender).send(captor.capture());

        Multipart multipart = assertInstanceOf(Multipart.class, captor.getValue().getContent());
        assertEquals(2, multipart.getCount());

        BodyPart attachmentPart = multipart.getBodyPart(1);
        assertEquals("arquivo.txt", attachmentPart.getFileName());
    }

    @Test
    void sendEmailShouldWrapJavaMailSenderError() {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
        doThrow(new RuntimeException("SMTP indisponivel")).when(javaMailSender).send(any(MimeMessage.class));

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Teste",
                null, null
        );

        EmailException exception = assertThrows(EmailException.class, () -> emailService.sendEmail(request));
        assertTrue(exception.getMessage().contains("Failed to send email"));
        assertTrue(exception.getMessage().contains("SMTP indisponivel"));
    }

    @Test
    void sendEmailShouldFailWhenAttachmentExceedsLimit() {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        byte[] bigFile = new byte[6 * 1024 * 1024];
        String base64 = Base64.getEncoder().encodeToString(bigFile);

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Teste",
                base64, "grande.bin"
        );

        EmailException exception = assertThrows(EmailException.class, () -> emailService.sendEmail(request));
        assertTrue(exception.getMessage().contains("5MB"));
    }

    @Test
    void sendEmailShouldTreatNullBase64AsNoAttachment() throws Exception {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Sem anexo real",
                null, null
        );

        emailService.sendEmail(request);

        ArgumentCaptor<MimeMessage> captor = ArgumentCaptor.forClass(MimeMessage.class);
        verify(javaMailSender).send(captor.capture());
        assertTrue(captor.getValue().getContent().toString().contains("Sem anexo real"));
    }
}
