package com.socialmedia.domain.emotions;

import com.socialmedia.domain.common.EmotionType;
import com.socialmedia.domain.tweet.Tweet;
import com.socialmedia.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter(AccessLevel.PRIVATE)
@Entity
@Table(name = "EMOTION")
public class Emotion {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "emotion_sequence")
    @SequenceGenerator(name = "emotion_sequence", sequenceName = "SEQ_EMOTION", allocationSize = 1)
    private Long id;

    @Enumerated(value = EnumType.STRING)
    private EmotionType type;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tweet tweet;

    public Emotion(EmotionType type, User user, Tweet tweet) {
        this.type = type;
        this.user = user;
        this.tweet = tweet;
    }

}
