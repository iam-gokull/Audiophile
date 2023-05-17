package com.ecommerce.audiophilesecurityserver.repository;

import com.ecommerce.audiophilesecurityserver.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {

    Optional<User> findByMailId(String mailId);

    boolean existsByMailId(String mailId);

}
