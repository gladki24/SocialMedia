package com.socialmedia.adapters.rest.resource.command;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInCommand {
    private String username;
    private String password;
}
