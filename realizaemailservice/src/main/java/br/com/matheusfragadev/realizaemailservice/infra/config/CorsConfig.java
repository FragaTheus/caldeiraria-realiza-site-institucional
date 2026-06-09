package br.com.matheusfragadev.realizaemailservice.infra.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "https://caldeirariarealiza.com.br",
                        "https://www.caldeirariarealiza.com.br",
                        "https://caldeirariarealiza.com.br/",
                        "https://www.caldeirariarealiza.com.br/",
                        "http://localhost:3000"
                )
                .allowedMethods("POST", "OPTIONS")
                .allowedHeaders("*");
    }
}
