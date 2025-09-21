package com.example.usermetadata.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usermetadata.Repository.UserRepo;
import com.example.usermetadata.Entity.UserMetadata;

@Service    
public class UserService {
    
    @Autowired
    private UserRepo userRepo;

    public UserMetadata saveUsermetadataToDB(UserMetadata metadata) {
        return userRepo.save(metadata);
    }

    public UserMetadata getUserDetailsFromDB(String userId) {
        return userRepo.findByUniqueId(userId);
    }
}
