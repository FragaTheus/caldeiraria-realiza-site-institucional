package br.com.matheusfragadev.realizaemailservice.mail;

import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailRequest;
import br.com.matheusfragadev.realizaemailservice.mail.service.EmailException;
import br.com.matheusfragadev.realizaemailservice.mail.service.EmailService;
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
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertInstanceOf;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
                "Matheus",
                "Realiza",
                "11999999999",
                "matheus@email.com",
                "Quero um orcamento",
                null
        );

        emailService.sendEmail(request);

        ArgumentCaptor<MimeMessage> captor = ArgumentCaptor.forClass(MimeMessage.class);
        verify(javaMailSender).send(captor.capture());

        MimeMessage sent = captor.getValue();
        assertEquals("Contato - Matheus", sent.getSubject());
        assertEquals("contato@caldeirariarealiza.com.br", sent.getAllRecipients()[0].toString());
        assertEquals("matheus@email.com", sent.getReplyTo()[0].toString());

        String body = sent.getContent().toString();
        assertTrue(body.contains("Novo contato recebido"));
        assertTrue(body.contains("Nome: Matheus"));
    }

    @Test
    void sendEmailShouldSendWithAttachment() throws Exception {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        MockMultipartFile attachment = new MockMultipartFile(
                "attachment",
                "arquivo.txt",
                "text/plain",
                "conteudo".getBytes()
        );

        EmailRequest request = new EmailRequest(
                "Matheus",
                "Realiza",
                "11999999999",
                "matheus@email.com",
                "Segue anexo",
                attachment
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
                "Matheus",
                "Realiza",
                "11999999999",
                "matheus@email.com",
                "Teste",
                null
        );

        EmailException exception = assertThrows(EmailException.class, () -> emailService.sendEmail(request));
        assertTrue(exception.getMessage().contains("Failed to send email"));
        assertTrue(exception.getMessage().contains("SMTP indisponivel"));
    }

    @Test
    void sendEmailShouldFailWhenAttachmentFilenameIsNull() {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        MockMultipartFile attachment = new MockMultipartFile(
                "attachment",
                null,
                "application/octet-stream",
                "123".getBytes()
        );

        EmailRequest request = new EmailRequest(
                "Matheus",
                "Realiza",
                "11999999999",
                "matheus@email.com",
                "Teste",
                attachment
        );

        EmailException exception = assertThrows(EmailException.class, () -> emailService.sendEmail(request));
        assertNotNull(exception.getMessage());
        assertTrue(exception.getMessage().contains("Failed to send email"));
    }

    @Test
    void sendEmailShouldTreatEmptyAttachmentAsNoAttachment() throws Exception {
        MimeMessage mimeMessage = new MimeMessage(Session.getInstance(new Properties()));
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);

        MockMultipartFile emptyAttachment = new MockMultipartFile(
                "attachment",
                "vazio.txt",
                "text/plain",
                new byte[0]
        );

        EmailRequest request = new EmailRequest(
                "Matheus",
                "Realiza",
                "11999999999",
                "matheus@email.com",
                "Sem anexo real",
                emptyAttachment
        );

        emailService.sendEmail(request);

        ArgumentCaptor<MimeMessage> captor = ArgumentCaptor.forClass(MimeMessage.class);
        verify(javaMailSender).send(captor.capture());
        String body = captor.getValue().getContent().toString();
        assertTrue(body.contains("Sem anexo real"));
    }
}

