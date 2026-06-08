package br.com.matheusfragadev.realizaemailservice.mail.service;

import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailRequest;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Value("${mail.to}")
    private String to;

    public void sendEmail(EmailRequest request){
        try{
            boolean hasAttachment = request.attachment() != null && !request.attachment().isEmpty();
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, hasAttachment, "UTF-8");

            helper.setTo(to);
            helper.setSubject("Contato - " + request.name());

            String body = buildBody(request);
            helper.setText(body, false);
            helper.setReplyTo(request.email());
            if (hasAttachment) {
                MultipartFile file = request.attachment();
                String originalFilename = file.getOriginalFilename();
                if (originalFilename == null || originalFilename.isBlank()) {
                    throw new IllegalArgumentException("Attachment filename is required.");
                }
                if (file.getSize() > 5 * 1024 * 1024) {
                    throw new EmailException("Attachment size exceeds the 5MB limit.");
                }
                helper.addAttachment
                        (
                                originalFilename,
                                new ByteArrayResource(file.getBytes())
                        );
            }
            javaMailSender.send(message);
        } catch (EmailException e) {
            throw e;
        } catch (Exception e) {
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
                request.name(),
                request.company(),
                request.phone(),
                request.email(),
                request.message()
        );
    }

}
