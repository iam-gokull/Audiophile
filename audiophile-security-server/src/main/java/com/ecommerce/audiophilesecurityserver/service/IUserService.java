package com.ecommerce.audiophilesecurityserver.service;

import com.ecommerce.audiophilesecurityserver.entity.User;

import java.util.List;

public interface IUserService {

    User addUser(User user);

    User loadByMailId(String mailId);

    boolean checkIfUserExists(User user);

    List<User> getAllUsers();

}
