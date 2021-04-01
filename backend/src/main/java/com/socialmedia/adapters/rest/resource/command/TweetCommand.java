package com.socialmedia.adapters.rest.resource.command;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TweetCommand {
    private String text;
    private String parentTweetLink;
}
