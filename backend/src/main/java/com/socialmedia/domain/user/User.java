package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.tweet.Tweet;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    @CreationTimestamp
    private LocalDateTime createdDate;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Account account;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Tweet> tweets = new ArrayList<>();

    @OneToMany(mappedBy = "from")
    private List<Following> following;

    @OneToMany(mappedBy = "to")
    private List<Following> followers;

    public User(Identifier identifier) {
        this.identifier = identifier;
    }

}
