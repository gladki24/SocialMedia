package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Username;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByAccountUsername(Username username);
}
