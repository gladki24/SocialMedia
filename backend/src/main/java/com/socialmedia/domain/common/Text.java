package com.socialmedia.domain.common;

import com.socialmedia.domain.asserts.DomainAsserts;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Embeddable
public class Text {

    public static final int TEXT_MAX_LENGTH = 255;

    @Getter
    @Column
    private String value;

    public static Text of(String value) {
        return new Text(value);
    }

    private Text(String value) {
        initValue(value);
    }

    private void initValue(String value) {
        DomainAsserts.assertArgumentNotTooLong(value, TEXT_MAX_LENGTH, "Text cannot be longer then " + TEXT_MAX_LENGTH + " characters");
        this.value = value;
    }

}
