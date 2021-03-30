package com.socialmedia.domain.common;

import com.socialmedia.application.tweet.LinkGenerator;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Link {

    @Getter
    @Column(updatable = false)
    private String value;

    public static Link init() {
        return new Link();
    }

    private Link() {
        initValue();
    }

    private void initValue() {
        this.value = LinkGenerator.generateRandomLink();
    }

}

