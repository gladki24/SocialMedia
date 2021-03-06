package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.common.Username;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByAccountUsername(Username username);
    Optional<User> findByIdentifier(Identifier identifier);
}
