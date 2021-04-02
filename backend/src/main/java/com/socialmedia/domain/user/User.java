package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.tweet.Tweet;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "USER")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @SequenceGenerator(name = "user_sequence", sequenceName = "SEQ_USER", allocationSize = 1)
    private Long id;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "IDENTIFIER"))
    private Identifier identifier;

    @CreatedDate
    private LocalDateTime createdDate;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Account account;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Tweet> tweets = new ArrayList<>();

    @OneToMany(mappedBy="from")
    private List<Following> following;

    @OneToMany(mappedBy="to")
    private List<Following> followers;

    public User(Identifier identifier) {
        this.identifier = identifier;
    }

    public void addTweet(Tweet tweet) {
        tweets.add(tweet);
        tweet.setUser(this);
    }

    public void removeTweet(Tweet tweet) {
        tweets.remove(tweet);
        tweet.setUser(null);
    }
}
