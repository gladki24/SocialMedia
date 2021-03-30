package com.socialmedia.domain.user.dto;

import com.socialmedia.domain.user.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDto {
    private Long id;
    private String username;
    private String role;
    private User user;
}
