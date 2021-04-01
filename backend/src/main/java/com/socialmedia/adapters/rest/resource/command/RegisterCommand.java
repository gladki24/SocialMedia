package com.socialmedia.adapters.rest.resource.command;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterCommand {
    private String username;
    private String password;
    private String identifier;
}
