package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Password;
import com.socialmedia.domain.common.Role;
import com.socialmedia.domain.common.Username;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ACCOUNT")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class Account {

    @Id
    private Long id;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "USERNAME"))
    private Username username;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "PASSWORD"))
    private Password password;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private User user;

    public Account(Username username, Password password, User user) {
        this.username = username;
        this.password = password;
        this.role = Role.USER;
        this.user = user;
    }
}
