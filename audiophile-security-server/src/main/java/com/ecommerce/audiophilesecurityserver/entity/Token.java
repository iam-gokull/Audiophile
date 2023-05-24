package com.ecommerce.audiophilesecurityserver.entity;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Calendar;
import java.util.Date;

@Document(collection = "verification-token")
@Getter
@Setter
public class Token {
    private static final int EXPIRATION = 60 * 24;

    @Id
    private ObjectId id;
    private String token;

    private ObjectId userId;
    private Date expiryDate;

    private Date calculateExpiryDate() {
        final Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(new Date().getTime());
        cal.add(Calendar.MINUTE, EXPIRATION);
        return new Date(cal.getTime().getTime());
    }

    public Token() {
        this.expiryDate = calculateExpiryDate();
    }

    public Token(final String token) {
        this.token = token;
        this.expiryDate = calculateExpiryDate();
    }

    public Token(final String token, final ObjectId userId) {
        this.token = token;
        this.userId = userId;
        this.expiryDate = calculateExpiryDate();
    }


}
