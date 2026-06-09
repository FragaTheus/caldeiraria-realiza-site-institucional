package br.com.matheusfragadev.realizaemailservice.infra.controller;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailRequest {

    @Size(max = 100)
    private String name;

    @Size(max = 100)
    private String company;

    @Size(max = 20)
    private String phone;

    @Size(max = 150)
    private String email;

    @Size(max = 500)
    private String message;

    private String attachmentBase64;

    private String attachmentName;
}
