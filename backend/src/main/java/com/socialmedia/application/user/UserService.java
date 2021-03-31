package com.socialmedia.application.user;

import com.socialmedia.domain.common.Username;
import com.socialmedia.domain.user.User;
import com.socialmedia.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findByUsername(Username username) {
        return userRepository.findByAccountUsername(username);
    }

}
