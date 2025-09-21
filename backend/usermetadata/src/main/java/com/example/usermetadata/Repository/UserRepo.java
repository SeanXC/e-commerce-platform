package com.example.usermetadata.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.usermetadata.Entity.UserMetadata;

@Repository
public interface UserRepo extends CrudRepository<UserMetadata, Long>{
    UserMetadata save(UserMetadata userMetadata);
    UserMetadata findByUniqueId(String uniqueId);
}
