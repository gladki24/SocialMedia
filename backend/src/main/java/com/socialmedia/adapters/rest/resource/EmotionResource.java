package com.socialmedia.adapters.rest.resource;

import com.socialmedia.adapters.rest.resource.command.EmotionCommand;
import com.socialmedia.application.emotions.EmotionService;
import com.socialmedia.domain.emotions.dto.EmotionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "emotion", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class EmotionResource {

    private final EmotionService emotionService;

    @PostMapping(value = "/create")
    public EmotionDto createEmotion(@RequestBody EmotionCommand command) {
        return emotionService.create(command);
    }

}
