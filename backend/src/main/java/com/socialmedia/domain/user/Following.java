package com.socialmedia.domain.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "FOLLOWING")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class Following {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "following_sequence")
    @SequenceGenerator(name = "following_sequence", sequenceName = "SEQ_FOLLOWING", allocationSize = 1)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FROM_USER_ID")
    private User from;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TO_USER_ID")
    private User to;

    public Following(User from, User to) {
        this.from = from;
        this.to = to;
    }
}
