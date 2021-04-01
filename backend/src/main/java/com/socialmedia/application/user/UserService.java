package com.socialmedia.application.user;

import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.common.Username;
import com.socialmedia.domain.user.User;
import com.socialmedia.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findByUsername(Username username) {
        return userRepository.findByAccountUsername(username);
    }

    @Transactional
    public User createUser(String identifier) {
        User user = new User(Identifier.of(identifier));
        return userRepository.save(user);
    }

}
