package com.job.jobpilot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.job.jobpilot.dto.request.UserUpdateRequest;
import com.job.jobpilot.dto.response.MessageResponse;
import com.job.jobpilot.model.Job;
import com.job.jobpilot.model.User;
import com.job.jobpilot.repository.UserRepo;
import com.job.jobpilot.service.JobService;

// import io.swagger.v3.oas.annotations.Operation;
// import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
@RestController
@RequestMapping("/User")
@AllArgsConstructor
@Tag(name = "User control", description = "Endpoints for User")
public class UserController {
    private final UserRepo userRepository;
    @Autowired
    private final PasswordEncoder encoder;
    @Autowired
    private final JobService jobService;

    @PutMapping("/users/{userId}")
    @PreAuthorize("hasRole('User')")
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody UserUpdateRequest userUpdateRequest, Authentication authentication) {

        Long currentUserId = ((User) authentication.getPrincipal()).getUid();

        if (!currentUserId.equals(userId)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: You are not authorized to update this user."));
        }

        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Error: User not found."));

        existingUser.setName(userUpdateRequest.getName());
        existingUser.setEmail(userUpdateRequest.getEmail());

        if (userUpdateRequest.getPassword() != null && !userUpdateRequest.getPassword().isEmpty()) {
            existingUser.setPassword(encoder.encode(userUpdateRequest.getPassword()));
        }

        userRepository.save(existingUser);

        return ResponseEntity.ok(new MessageResponse("User updated successfully."));
    }
    @GetMapping("/alljobs")
    @PreAuthorize("hasRole('User')")
    public List<Job> getAllJob() {
        return jobService.getAllJob();
    }
}