package com.socialmedia.adapters.rest.resource;

import com.socialmedia.application.user.UserService;
import com.socialmedia.domain.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/followed/{identifier}")
    public List<UserDto> userListOfFollowedUsers(@PathVariable String identifier) {
        return this.userService.userListOfFollowedUsers(identifier);
    }

    @GetMapping("/following/{identifier}")
    public List<UserDto> userListOfFollowingUsers(@PathVariable String identifier) {
        return userService.userListOfFollowingUsers(identifier);
    }

    @PostMapping("/follow/{identifier}")
    public void followUser(@PathVariable String identifier) throws Exception {
        userService.followUser(identifier);
    }

    @PostMapping("/unfollow/{identifier}")
    public void unfollowUser(@PathVariable String identifier) {
        userService.unfollowUser(identifier);
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
