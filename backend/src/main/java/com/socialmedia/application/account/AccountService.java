package com.socialmedia.application.account;

import com.socialmedia.adapters.rest.resource.command.RegisterCommand;
import com.socialmedia.adapters.rest.resource.command.SignInCommand;
import com.socialmedia.application.mapper.AllInOneMapper;
import com.socialmedia.application.user.UserService;
import com.socialmedia.config.security.JwtTokenUtil;
import com.socialmedia.domain.common.Password;
import com.socialmedia.domain.common.Username;
import com.socialmedia.domain.user.Account;
import com.socialmedia.domain.user.AccountRepository;
import com.socialmedia.domain.user.dto.AccountDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil tokenUtil;
    private final JwtUserDetailsService userDetailsService;

    private final UserService userService;
    private final AccountRepository accountRepository;
    private final AllInOneMapper mapper;
    private final PasswordEncoder passwordEncoder;

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

    public com.socialmedia.domain.user.User getCurrentUserAccount() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        Username username = Username.of(user.getUsername());
        return userService.findByUsername(username);
    }

    @Transactional
    public AccountDto createUserAccount(RegisterCommand command) {
        Username username = Username.of(command.getUsername());
        Password password = Password.of(passwordEncoder.encode(command.getPassword()));
        com.socialmedia.domain.user.User user = userService.createUser(command.getIdentifier());
        Account account = new Account(username, password, user);
        return mapper.account(accountRepository.save(account));
    }
}
