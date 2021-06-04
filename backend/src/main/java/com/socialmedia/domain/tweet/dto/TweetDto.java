package com.socialmedia.domain.tweet.dto;

import com.socialmedia.domain.emotions.dto.EmotionDto;
import com.socialmedia.domain.user.dto.UserDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class TweetDto {
    private Long id;
    private String text;
    private String link;
    private String parentTweetLink;
    private TweetAuthorDto author;
    private List<EmotionDto> emotions;
    private List<TweetDto> comments;
    private LocalDateTime createdDate;
}
