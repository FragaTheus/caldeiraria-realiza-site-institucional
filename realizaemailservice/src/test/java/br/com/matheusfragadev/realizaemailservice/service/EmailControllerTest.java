package br.com.matheusfragadev.realizaemailservice.service;

import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailController;
import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailExceptionHandler;
import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class EmailControllerTest {

    @Mock
    private EmailService emailService;

    private MockMvc mockMvc;
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.afterPropertiesSet();

        mockMvc = MockMvcBuilders
                .standaloneSetup(new EmailController(emailService))
                .setControllerAdvice(new EmailExceptionHandler())
                .setValidator(validator)
                .build();

        objectMapper = new ObjectMapper();
    }

    @Test
    void contactShouldReturnNoContentForValidRequest() throws Exception {
        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Mensagem de contato",
                null, null
        );

        mockMvc.perform(post("/api/v1/mail")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isNoContent());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldReturnBadRequestWhenNameExceedsLimit() throws Exception {
        EmailRequest request = new EmailRequest(
                "a".repeat(101), "Realiza", "11999999999",
                "matheus@email.com", "Mensagem",
                null, null
        );

        mockMvc.perform(post("/api/v1/mail")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());

        verify(emailService, never()).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldReturnServerErrorWhenServiceFails() throws Exception {
        doThrow(new EmailException("erro ao enviar")).when(emailService).sendEmail(any(EmailRequest.class));

        EmailRequest request = new EmailRequest(
                "Matheus", "Realiza", "11999999999",
                "matheus@email.com", "Mensagem",
                null, null
        );

        mockMvc.perform(post("/api/v1/mail")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isInternalServerError());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldAcceptRequestWithoutOptionalFields() throws Exception {
        EmailRequest request = new EmailRequest(
                "Matheus", null, null,
                "matheus@email.com", null,
                null, null
        );

        mockMvc.perform(post("/api/v1/mail")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isNoContent());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }
}
