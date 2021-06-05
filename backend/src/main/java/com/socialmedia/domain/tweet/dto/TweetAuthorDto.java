package com.socialmedia.domain.tweet.dto;

import com.socialmedia.domain.user.dto.AccountDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class TweetAuthorDto {
    private Long id;
    private String identifier;
    private LocalDateTime createdDate;
    private AccountDto account;
}
