package br.com.matheusfragadev.realizaemailservice.infra.controller;

import br.com.matheusfragadev.realizaemailservice.mail.service.EmailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/mail")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Void> contact(@Valid @ModelAttribute EmailRequest emailRequest){
        emailService.sendEmail(emailRequest);
        return ResponseEntity.noContent().build();
    }

}
