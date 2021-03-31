package com.socialmedia.application.account;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.socialmedia.domain.common.Password;
import com.socialmedia.domain.common.Username;
import com.socialmedia.domain.user.Account;
import com.socialmedia.domain.user.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Account> account = accountRepository.findByUsername(Username.of(username));
        if (account.isPresent()) {
            Account userAcc = account.get();
            List<SimpleGrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(userAcc.getRole().name()));
            return new User(userAcc.getUsername().getValue(), userAcc.getPassword().getValue(), authorities);
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
