package com.job.jobpilot.service;

import java.util.List;

import com.job.jobpilot.dto.request.UserRequest;
import com.job.jobpilot.dto.request.UserUpdateRequest;
import com.job.jobpilot.model.User;

public interface UserService {
void createUser(UserRequest userRequest);
void updateUser(long userUid, UserUpdateRequest userUpdateRequest);
void deleteUser(long userUid);
// List<User> getAllUser();
}
