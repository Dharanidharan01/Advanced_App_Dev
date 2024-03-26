package com.job.jobpilot.controller;

import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.job.jobpilot.dto.request.JobRequest;
import com.job.jobpilot.dto.request.RegisterRequest;
import com.job.jobpilot.dto.request.UserUpdateRequest;
import com.job.jobpilot.dto.response.MessageResponse;
import com.job.jobpilot.enums.Role;
import com.job.jobpilot.model.User;
// import com.job.jobpilot.dto.request.JobRequest;
// import com.job.jobpilot.model.Job;
// import com.job.jobpilot.repository.JobRepo;
// import com.job.jobpilot.service.JobService;
import com.job.jobpilot.repository.UserRepo;
import com.job.jobpilot.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
// @RequiredArgsConstructor
@AllArgsConstructor
@Tag(name = "Admin Controls", description = "Endpoints for admin")
public class AdminController {
    private final UserService userService;
    private final UserRepo userRepository;
	// private final JobRepo jobRepo;
	// private final JobService jobService;
    @Autowired
    private final PasswordEncoder encoder;

    @PostMapping("/Addusers")
    @PreAuthorize("hasRole('Admin')")
    @Operation(summary = "Add user", description = "Allows admin to create user.")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
	    if (userRepository.existsByName(registerRequest.getName())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
	    }

	    if (userRepository.existsByEmail(registerRequest.getEmail())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
	    }

		User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(encoder.encode(registerRequest.getPassword()));
		user.setRole(Role.User);
        // Save the user entity to the database
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User created successfully!"));
    }

	// @PostMapping("/AddJobs")
    // @PreAuthorize("hasRole('Admin')")
    // @Operation(summary = "Add job", description = "Allows admin to add jobs.")
    // public ResponseEntity<?> createJob(@Valid @RequestBody JobRequest jobRequest) {
	//     if (jobRepo.existsByName(jobRequest.getJobname())) {
	//       return ResponseEntity.badRequest().body(new MessageResponse("Error: Job already exists!"));
	//     }

	//     Job job= new Job();
	// 	 job.setJobname(jobRequest.getJobname());
	//      job.setDescription(jobRequest.getDescription());
	//       job.setSalary(jobRequest.getSalary());

    //     jobRepo.save(job);
    //     return ResponseEntity.ok(new MessageResponse("Job added successfully!"));
    // }


    @PutMapping("/users/{userId}")
	@PreAuthorize("hasRole('Admin')")
    public ResponseEntity<?> AdminupdateUser(@PathVariable Long userId, @RequestBody UserUpdateRequest userUpdateRequest) {
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


    @DeleteMapping("/users/{userId}")
	@PreAuthorize("hasRole('Admin')")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
	    userService.deleteUser(userId);
	    return ResponseEntity.ok(new MessageResponse("User deleted successfully."));
	}

    // @DeleteMapping("/admin/{jobid}")
	// @PreAuthorize("hasRole('Admin')")
	// public ResponseEntity<?> deleteJob(@PathVariable Long jobid) {
	//     jobService.deleteJob(jobid);
	//     return ResponseEntity.ok(new MessageResponse("Job deleted successfully."));
	// }
	// @GetMapping("/allusers")
    // @PreAuthorize("hasRole('Admin')")
    // public List<User> getAllUser() {
    //     return userService.getAllUser();
    // }
}