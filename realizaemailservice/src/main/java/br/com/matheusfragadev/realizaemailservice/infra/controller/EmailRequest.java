package br.com.matheusfragadev.realizaemailservice.infra.controller;

import jakarta.validation.constraints.Size;
import org.springframework.web.multipart.MultipartFile;

public record EmailRequest(
        @Size(max = 100)
        String name,

        @Size(max = 100)
        String company,

        @Size(max = 20)
        String phone,

        @Size(max = 150)
        String email,

        @Size(max = 500)
        String message,

        MultipartFile attachment
) {
}
