package com.socialmedia.domain.common;

import com.socialmedia.domain.asserts.DomainAsserts;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Embeddable
public class Password {

    public static final int PASSWORD_MAX_LENGTH = 255;

    @Getter
    @Column
    private String value;

    public static Password of(String value) {
        return new Password(value);
    }

    private Password(String value) {
        initValue(value);
    }

    private void initValue(String value) {
        //TODO niech on to zamienia w locie na BCCRYPT
        DomainAsserts.assertArgumentNotTooLong(value, PASSWORD_MAX_LENGTH, "Username cannot be longer then " + PASSWORD_MAX_LENGTH + " characters");
        this.value = value;
    }

}
