package com.socialmedia.application.tweet;

import com.socialmedia.application.mapper.AllInOneMapper;
import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.tweet.Tweet;
import com.socialmedia.domain.tweet.TweetRepository;
import com.socialmedia.domain.tweet.dto.TweetDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TweetService {

    private final TweetRepository tweetRepository;
    private final AllInOneMapper mapper;

    public List<TweetDto> getAllUserTweets(Identifier identifier) {
        List<Tweet> tweets = tweetRepository.findAllByUserIdentifier(identifier);
        return mapper.tweets(tweets);
    }

}
