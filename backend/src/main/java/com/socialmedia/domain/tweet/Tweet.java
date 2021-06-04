package com.socialmedia.domain.tweet;

import com.socialmedia.domain.common.Link;
import com.socialmedia.domain.common.Text;
import com.socialmedia.domain.emotions.Emotion;
import com.socialmedia.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "PARENT_TWEET_ID")
    private List<Tweet> comments = new ArrayList<>();

    @CreatedDate
    private LocalDateTime createdDate;

    public Tweet(Text text, User user) {
        this.text = text;
        this.link = Link.init();
        this.user = user;
    }

    public void addEmotion(Emotion emotion) {
        this.emotions.add(emotion);
    }

    public void addComment(Tweet tweet) {
        this.comments.add(tweet);
    }

}


