package com.socialmedia.adapters.rest.resource;

import com.socialmedia.adapters.rest.resource.command.TweetCommand;
import com.socialmedia.application.tweet.TweetService;
import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.tweet.dto.TweetDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "tweet", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class TweetResource {

    private final TweetService tweetService;

    @GetMapping("/all/{identifier}")
    public List<TweetDto> getAllUserTweets(@PathVariable String identifier) {
        return tweetService.getAllUserTweets(Identifier.of(identifier));
    }

    @GetMapping("/my/feed")
    public List<TweetDto> getCurrentUserFeed() {
        return tweetService.currentUserFeed();
    }

    @GetMapping("/feed")
    public List<TweetDto> getCurrentUserFollowingFeed() {
        return tweetService.currentUserFollowingFeed();
    }

    @PostMapping("/create")
    public TweetDto createTweet(@RequestBody TweetCommand command) {
        return tweetService.createTweet(command);
    }

    @GetMapping("/get/{link}")
    public TweetDto getTweet(@PathVariable String link) {
        return tweetService.getTweet(link);
    }

}
