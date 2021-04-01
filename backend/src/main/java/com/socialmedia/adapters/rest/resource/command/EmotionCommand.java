package com.socialmedia.adapters.rest.resource.command;

import com.socialmedia.domain.common.EmotionType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmotionCommand {
    private EmotionType type;
    private String tweetLink;
}
