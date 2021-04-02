package com.socialmedia.domain.common;

import com.socialmedia.domain.asserts.DomainAsserts;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Embeddable
public class Identifier {

    public static final int IDENTIFIER_MAX_LENGTH = 25;

    @Getter
    @Column
    private String value;

    public static Identifier of(String value) {
        return new Identifier(value);
    }

    private Identifier(String value) {
        initValue(value);
    }

    private void initValue(String value) {
        DomainAsserts.assertArgumentNotTooLong(value, IDENTIFIER_MAX_LENGTH, "Text cannot be longer then " + IDENTIFIER_MAX_LENGTH + " characters");
        this.value = value;
    }

}
