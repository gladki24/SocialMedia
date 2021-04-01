package com.socialmedia.application.account;

import com.socialmedia.adapters.rest.resource.command.SignInCommand;
import com.socialmedia.config.security.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil tokenUtil;
    private final JwtUserDetailsService userDetailsService;

    public String authenticate(SignInCommand command) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(command.getUsername(), command.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("User disabled", e);
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid credentials", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(command.getUsername());
        return tokenUtil.generateToken(userDetails);
    }

}
