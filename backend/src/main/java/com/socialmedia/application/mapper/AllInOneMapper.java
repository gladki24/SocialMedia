package com.socialmedia.application.mapper;

import com.socialmedia.domain.emotions.Emotion;
import com.socialmedia.domain.emotions.dto.EmotionDto;
import com.socialmedia.domain.tweet.Tweet;
import com.socialmedia.domain.tweet.dto.TweetAuthorDto;
import com.socialmedia.domain.tweet.dto.TweetDto;
import com.socialmedia.domain.user.Account;
import com.socialmedia.domain.user.User;
import com.socialmedia.domain.user.dto.AccountDto;
import com.socialmedia.domain.user.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AllInOneMapper {

    List<TweetDto> tweets(List<Tweet> tweets);

    @Mapping(target = "text", source = "text.value")
    @Mapping(target = "link", source = "link.value")
    @Mapping(target = "author", source = "user")
    @Mapping(target = "parentTweetLink", source = "parentTweet.link.value")
    TweetDto tweet(Tweet tweet);

    @Mapping(target = "identifier", source = "identifier.value")
    TweetAuthorDto tweetAuthor(User user);

    List<EmotionDto> emotions(List<Emotion> emotions);

    EmotionDto emotion(Emotion emotion);

    List<UserDto> users(List<User> tweets);

    @Mapping(target = "identifier", source = "identifier.value")
    UserDto user(User user);

    @Mapping(target = "username", source = "username.value")
    AccountDto account(Account account);
}
