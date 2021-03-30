package com.socialmedia.domain.tweet.dto;

import com.socialmedia.domain.emotions.dto.EmotionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TweetDto {
    private Long id;
    private String text;
    private String link;
    private List<EmotionDto> emotions;
    private List<TweetDto> comments;
}
