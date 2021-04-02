package com.socialmedia.domain.tweet;

import com.socialmedia.domain.common.Identifier;
import com.socialmedia.domain.common.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long> {

    Optional<Tweet> findByLink(Link link);

    List<Tweet> findAllByUserIdentifier(Identifier identifier);
}
