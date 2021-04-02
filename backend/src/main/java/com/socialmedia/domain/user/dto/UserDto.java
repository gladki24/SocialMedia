package com.socialmedia.domain.user.dto;

import com.socialmedia.domain.tweet.dto.TweetDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String identifier;
    private LocalDateTime createdDate;
    private AccountDto account;
    private List<TweetDto> tweets;
}
