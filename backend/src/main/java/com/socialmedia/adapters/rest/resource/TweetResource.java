package com.socialmedia.adapters.rest.resource;

import com.socialmedia.application.tweet.TweetService;
import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.tweet.dto.TweetDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
