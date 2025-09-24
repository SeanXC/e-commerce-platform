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
        try {
            // Try to find existing user first
            UserMetadata existingUser = userRepo.findByUniqueId(metadata.getUniqueId());
            if (existingUser != null) {
                // Update existing user
                existingUser.setName(metadata.getName());
                existingUser.setEmail(metadata.getEmail());
                return userRepo.save(existingUser);
            } else {
                // Create new user
                return userRepo.save(metadata);
            }
        } catch (Exception e) {
            // If there's still a constraint violation, try to find and update
            UserMetadata existingUser = userRepo.findByUniqueId(metadata.getUniqueId());
            if (existingUser != null) {
                existingUser.setName(metadata.getName());
                existingUser.setEmail(metadata.getEmail());
                return userRepo.save(existingUser);
            }
            throw e;
        }
    }

    public UserMetadata getUserDetailsFromDB(String userId) {
        return userRepo.findByUniqueId(userId);
    }
}
