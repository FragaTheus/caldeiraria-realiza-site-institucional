package br.com.matheusfragadev.realizaemailservice.service.mail;

import br.com.matheusfragadev.realizaemailservice.controller.mail.EmailRequest;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Value("${mail.to}")
    private String to;

    public void sendEmail(EmailRequest request) {
        try {
            log.info("Preparing to send email from {} <{}>", request.getName(), request.getEmail());
            boolean hasAttachment = request.getAttachmentBase64() != null
                    && !request.getAttachmentBase64().isBlank()
                    && request.getAttachmentName() != null
                    && !request.getAttachmentName().isBlank();

            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, hasAttachment, "UTF-8");

            helper.setTo(to);
            helper.setSubject("Contato - " + request.getName());
            helper.setText(buildBody(request), false);
            helper.setReplyTo(request.getEmail());

            if (hasAttachment) {
                log.info("Processing attachment: {}", request.getAttachmentName());
                byte[] fileBytes = Base64.getDecoder().decode(request.getAttachmentBase64());

                if (fileBytes.length > 5 * 1024 * 1024) {
                    throw new EmailException("Attachment size exceeds the 5MB limit.");
                }

                helper.addAttachment(request.getAttachmentName(), new ByteArrayResource(fileBytes));
            }

            javaMailSender.send(message);
            log.info("Email sent successfully to {}", to);
        } catch (EmailException e) {
            log.error("EmailException: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("Failed to send email: {}", e.getMessage(), e);
            throw new EmailException("Failed to send email: " + e.getMessage(), e);
        }
    }

    private String buildBody(EmailRequest request) {
        return """
                Novo contato recebido:

                Nome: %s
                Empresa: %s
                Telefone: %s
                Email: %s
                Mensagem: %s
                """.formatted(
                request.getName(),
                request.getCompany(),
                request.getPhone(),
                request.getEmail(),
                request.getMessage()
        );
    }
}
