package br.com.matheusfragadev.realizaemailservice.infra.controller;

import br.com.matheusfragadev.realizaemailservice.mail.service.EmailException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class EmailExceptionHandler {

    @ExceptionHandler(EmailException.class)
    public ResponseEntity<Void> handleEmailException(EmailException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}

