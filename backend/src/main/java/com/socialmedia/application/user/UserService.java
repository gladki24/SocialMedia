package com.socialmedia.application.user;

import com.socialmedia.adapters.rest.resource.command.RegisterCommand;
import com.socialmedia.application.mapper.AllInOneMapper;
import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.common.Password;
import com.socialmedia.domain.common.Username;
import com.socialmedia.domain.user.*;
import com.socialmedia.domain.user.dto.AccountDto;
import com.socialmedia.domain.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final AllInOneMapper mapper;

    private final UserRepository userRepository;
    private final AccountRepository accountRepository;
    private final FollowingRepository followingRepository;

    private final PasswordEncoder passwordEncoder;

    @Transactional
    public AccountDto createUserAccount(RegisterCommand command) {
        Username username = Username.of(command.getUsername());
        Password password = Password.of(passwordEncoder.encode(command.getPassword()));
        User user = createUser(command.getIdentifier());
        Account account = new Account(username, password, user);
        return mapper.account(accountRepository.save(account));
    }

    @Transactional
    public User createUser(String identifier) {
        User user = new User(Identifier.of(identifier));
        return userRepository.save(user);
    }

    public List<UserDto> currentUserListOfFollowedUsers() {
        User currentUser = getCurrentUserAccount();
        return currentUser.getFollowing().stream()
                .map(Following::getTo)
                .map(mapper::user)
                .collect(Collectors.toList());
    }

    public List<UserDto> currentUserListOfFollowingUsers() {
        User currentUser = getCurrentUserAccount();
        return currentUser.getFollowers().stream()
                .map(Following::getTo)
                .map(mapper::user)
                .collect(Collectors.toList());
    }

    @Transactional
    public void followUser(String identifier) throws Exception {
        User currentUser = getCurrentUserAccount();

        Optional<Following> presentFollowing = followingRepository.findByFrom_IdentifierAndTo_Identifier
                (currentUser.getIdentifier(), Identifier.of(identifier));
        if (presentFollowing.isPresent()) {
            throw new Exception("This user is already followed");
        }

        User userToFollow = userRepository.findByIdentifier(Identifier.of(identifier))
                .orElseThrow(NoSuchElementException::new);

        Following following = new Following(currentUser, userToFollow);
        followingRepository.save(following);
    }

    @Transactional
    public void unfollowUser(String identifier) {
        User currentUser = getCurrentUserAccount();
        Following following =
                followingRepository.findByFrom_IdentifierAndTo_Identifier(currentUser.getIdentifier(), Identifier.of(identifier))
                        .orElseThrow(NoSuchElementException::new);

        followingRepository.delete(following);
    }

    public UserDto currentUser() {
        User user = getCurrentUserAccount();
        return mapper.user(user);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public List<UserDto> allUsers() {
        return mapper.users(userRepository.findAll());
    }

    public User getCurrentUserAccount() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        org.springframework.security.core.userdetails.User user = (org.springframework.security.core.userdetails.User) auth.getPrincipal();
        Username username = Username.of(user.getUsername());
        return userRepository.findByAccountUsername(username)
                .orElseThrow(NoSuchElementException::new);
    }

}
