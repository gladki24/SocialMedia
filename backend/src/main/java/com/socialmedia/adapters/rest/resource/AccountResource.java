package com.socialmedia.adapters.rest.resource;

import com.socialmedia.adapters.rest.resource.command.SignInCommand;
import com.socialmedia.adapters.rest.resource.response.AuthenticationResponse;
import com.socialmedia.application.account.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "account", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AccountResource {

    private final AccountService accountService;

    @PostMapping(value = "/authenticate")
    public AuthenticationResponse authenticate(@RequestBody SignInCommand command) throws Exception {
        String token = accountService.authenticate(command);
        return new AuthenticationResponse(token);
    }

}
