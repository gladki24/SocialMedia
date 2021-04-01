package com.socialmedia.application.emotions;

import com.socialmedia.adapters.rest.resource.command.EmotionCommand;
import com.socialmedia.application.mapper.AllInOneMapper;
import com.socialmedia.application.user.UserService;
import com.socialmedia.domain.common.Link;
import com.socialmedia.domain.emotions.Emotion;
import com.socialmedia.domain.emotions.EmotionRepository;
import com.socialmedia.domain.emotions.dto.EmotionDto;
import com.socialmedia.domain.tweet.Tweet;
import com.socialmedia.domain.tweet.TweetRepository;
import com.socialmedia.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class EmotionService {

    private final UserService userService;

    private final EmotionRepository emotionRepository;
    private final TweetRepository tweetRepository;

    private final AllInOneMapper mapper;

    public EmotionDto create(EmotionCommand command) {
        User user = userService.getCurrentUserAccount();
        Tweet tweet = tweetRepository.findByLink(Link.of(command.getTweetLink())).orElseThrow(NoSuchElementException::new);
        Emotion emotion = new Emotion(command.getType(), user);
        tweet.addEmotion(emotion);
        return mapper.emotion(emotionRepository.save(emotion));
    }


}
