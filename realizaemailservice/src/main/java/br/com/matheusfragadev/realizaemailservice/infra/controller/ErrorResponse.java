package br.com.matheusfragadev.realizaemailservice.infra.controller;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ErrorResponse {
    private String message;
    private String details;
    private LocalDateTime timestamp = LocalDateTime.now();

    public ErrorResponse(String message, String details) {
        this.message = message;
        this.details = details;
    }
}
