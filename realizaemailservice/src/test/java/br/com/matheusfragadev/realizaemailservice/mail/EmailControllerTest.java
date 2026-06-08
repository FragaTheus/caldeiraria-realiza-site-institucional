package br.com.matheusfragadev.realizaemailservice.mail;

import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailController;
import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailExceptionHandler;
import br.com.matheusfragadev.realizaemailservice.infra.controller.EmailRequest;
import br.com.matheusfragadev.realizaemailservice.mail.service.EmailException;
import br.com.matheusfragadev.realizaemailservice.mail.service.EmailService;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class EmailControllerTest {

    @Mock
    private EmailService emailService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.afterPropertiesSet();

        mockMvc = MockMvcBuilders
                .standaloneSetup(new EmailController(emailService))
                .setControllerAdvice(new EmailExceptionHandler())
                .setValidator(validator)
                .build();
    }

    @Test
    void contactShouldReturnNoContentForValidRequest() throws Exception {
        mockMvc.perform(multipart("/api/v1/mail")
                        .param("name", "Matheus")
                        .param("company", "Realiza")
                        .param("phone", "11999999999")
                        .param("email", "matheus@email.com")
                        .param("text", "Mensagem de contato")
                        .contentType(MediaType.MULTIPART_FORM_DATA))
                .andExpect(status().isNoContent());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldReturnBadRequestWhenNameExceedsLimit() throws Exception {
        String invalidName = "a".repeat(101);

        mockMvc.perform(multipart("/api/v1/mail")
                        .param("name", invalidName)
                        .param("company", "Realiza")
                        .param("phone", "11999999999")
                        .param("email", "matheus@email.com")
                        .param("text", "Mensagem"))
                .andExpect(status().isBadRequest());

        verify(emailService, never()).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldReturnServerErrorWhenServiceFails() throws Exception {
        doThrow(new EmailException("erro ao enviar")).when(emailService).sendEmail(any(EmailRequest.class));

        mockMvc.perform(multipart("/api/v1/mail")
                        .param("name", "Matheus")
                        .param("company", "Realiza")
                        .param("phone", "11999999999")
                        .param("email", "matheus@email.com")
                        .param("text", "Mensagem"))
                .andExpect(status().isInternalServerError());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }

    @Test
    void contactShouldAcceptRequestWithoutOptionalFields() throws Exception {
        mockMvc.perform(multipart("/api/v1/mail")
                        .param("name", "Matheus")
                        .param("email", "matheus@email.com"))
                .andExpect(status().isNoContent());

        verify(emailService).sendEmail(any(EmailRequest.class));
    }
}
