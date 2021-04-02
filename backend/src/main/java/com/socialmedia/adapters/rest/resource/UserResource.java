package com.socialmedia.adapters.rest.resource;

import com.socialmedia.application.user.UserService;
import com.socialmedia.domain.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "user", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class UserResource {

    private final UserService userService;

    @GetMapping("/followed/all")
    public List<UserDto> currentUserListOfFollowedUsers() {
        return userService.currentUserListOfFollowedUsers();
    }

    @GetMapping("/following/all")
    public List<UserDto> currentUserListOfFollowingUsers() {
        return userService.currentUserListOfFollowingUsers();
    }

    @GetMapping("/profile")
    public UserDto currentProfile() {
        return userService.currentUser();
    }

    @GetMapping("/all")
    public List<UserDto> allUsers() {
        return userService.allUsers();
    }

}
