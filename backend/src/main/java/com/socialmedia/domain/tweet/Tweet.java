package com.socialmedia.domain.tweet;

import com.socialmedia.adapters.rest.resource.command.TweetCommand;
import com.socialmedia.domain.common.Link;
import com.socialmedia.domain.common.Text;
import com.socialmedia.domain.emotions.Emotion;
import com.socialmedia.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Entity
@Table(name = "TWEET")
public class Tweet {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tweet_sequence")
    @SequenceGenerator(name = "tweet_sequence", sequenceName = "SEQ_TWEET", allocationSize = 1)
    private Long id;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "TEXT"))
    private Text text;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "LINK"))
    private Link link;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "TWEET_ID")
    private List<Emotion> emotions = new ArrayList<>();

    @ManyToOne
    private Tweet parentTweet;

    @OneToMany(mappedBy = "parentTweet", cascade = CascadeType.ALL)
    private List<Tweet> comments = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdDate;

    public Tweet(TweetCommand command, User user) {
        this.text = Text.of(command.getText());
        this.link = Link.init();
        this.user = user;
    }

    public void addEmotion(Emotion emotion) {
        this.emotions.add(emotion);
    }

    public void linkParent(Tweet tweet) {
        this.parentTweet = tweet;
    }
    public void addComment(Tweet tweet) {
        this.comments.add(tweet);
    }

}


