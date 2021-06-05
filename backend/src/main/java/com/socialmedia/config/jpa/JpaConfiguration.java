package com.socialmedia.config.jpa;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(
        value = "com.socialmedia.domain"
)
@EnableJpaAuditing
@Configuration
public class JpaConfiguration {
}
