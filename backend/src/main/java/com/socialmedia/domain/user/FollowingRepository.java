package com.socialmedia.domain.user;

import com.socialmedia.domain.common.Identifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FollowingRepository extends JpaRepository<Following, Long> {
    Optional<Following> findByFrom_IdentifierAndTo_Identifier(Identifier fromUserIdentifier, Identifier toUserIdentifier);
}
