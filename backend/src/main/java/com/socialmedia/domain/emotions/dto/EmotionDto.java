package com.socialmedia.domain.emotions.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class EmotionDto {
    private Long id;
    private String type;
    private LocalDateTime createdDate;
}
