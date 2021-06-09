package com.socialmedia.application.tweet;

import com.socialmedia.adapters.rest.resource.command.TweetCommand;
import com.socialmedia.application.mapper.AllInOneMapper;
import com.socialmedia.application.user.UserService;
import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.common.Link;
import com.socialmedia.domain.common.Text;
import com.socialmedia.domain.tweet.Tweet;
import com.socialmedia.domain.tweet.TweetRepository;
import com.socialmedia.domain.tweet.dto.TweetDto;
import com.socialmedia.domain.user.Following;
import com.socialmedia.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TweetService {

    private final UserService userService;

    private final TweetRepository tweetRepository;
    private final AllInOneMapper mapper;

    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public List<TweetDto> getAllUserTweets(Identifier identifier) {
        List<Tweet> tweets = tweetRepository.findAllByUserIdentifier(identifier);
        return mapper.tweets(tweets);
    }

    public List<TweetDto> currentUserFeed() {
        User user = userService.getCurrentUserAccount();
        return user.getTweets().stream()
                .map(mapper::tweet)
                .collect(Collectors.toList());
    }

    public List<TweetDto> currentUserFollowingFeed() {
        User user = userService.getCurrentUserAccount();
        return user.getFollowing().stream()
                .map(Following::getTo)
                .map(User::getTweets)
                .flatMap(Collection::stream)
                .map(mapper::tweet)
                .collect(Collectors.toList());
    }

    public TweetDto getTweet(String link) {
        return tweetRepository
                .findByLink(Link.of(link))
                .map(mapper::tweet)
                .orElseThrow(NoSuchElementException::new);
    }

    @Transactional
    public TweetDto createTweet(TweetCommand command) {
        User user = userService.getCurrentUserAccount();
        Tweet tweet = new Tweet(command, user);
        if (StringUtils.hasText(command.getParentTweetLink())) {
            Tweet parentTweet = tweetRepository.findByLink(Link.of(command.getParentTweetLink())).orElseThrow(NoSuchElementException::new);
            tweet.linkParent(parentTweet);
            parentTweet.addComment(tweet);
        }
        return mapper.tweet(tweetRepository.save(tweet));
    }

}
