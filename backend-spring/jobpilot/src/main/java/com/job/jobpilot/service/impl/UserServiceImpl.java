package com.job.jobpilot.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.job.jobpilot.dto.request.UserRequest;
import com.job.jobpilot.dto.request.UserUpdateRequest;
import com.job.jobpilot.model.User;
import com.job.jobpilot.repository.UserRepo;
import com.job.jobpilot.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;

    @Override
    public void createUser(UserRequest userRequest)
    {
    User user =new User();
   user.setName(userRequest.getName());
   user.setEmail(userRequest.getEmail());
   user.setPassword(userRequest.getPassword());
   userRepo.save(user);     
    }
    @Override
    public void updateUser(long userUid,UserUpdateRequest userUpdateRequest){
        User existingUser=userRepo.findById(userUid)
        .orElseThrow(() -> new RuntimeException("User Not Found"));
        existingUser.setName(userUpdateRequest.getName());
        existingUser.setEmail(userUpdateRequest.getEmail());
        existingUser.setPassword(userUpdateRequest.getPassword());

    }
    @Override
    public void deleteUser(long userUid) {
       userRepo.deleteById(userUid);
    }
    // @Override
    // public List<User> getAllUser() {
    //     return userRepo.findAll();
    // }
}
