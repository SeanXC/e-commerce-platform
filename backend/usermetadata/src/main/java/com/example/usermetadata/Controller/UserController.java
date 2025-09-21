package com.example.usermetadata.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.usermetadata.Entity.UserMetadata;
import com.example.usermetadata.Services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/ecommerce/user")
public class UserController {


    @Autowired
    private UserService userService;


    @PostMapping("/saveUserDetails")
    public UserMetadata saveUserDetails(@RequestBody UserMetadata userMetadata) {
        UserMetadata user = userService.saveUsermetadataToDB(userMetadata);
        return user;
    }

    @GetMapping("/getUserDetails/{uniqueId}")
    public UserMetadata getUserDetails(@PathVariable String uniqueId) {
        UserMetadata user = userService.getUserDetailsFromDB(uniqueId);
        return user;
    }
}
