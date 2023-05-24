package com.ecommerce.audiophilesecurityserver.repository;

import com.ecommerce.audiophilesecurityserver.entity.Token;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VerificationTokenRepository extends MongoRepository<Token, ObjectId> {
}
