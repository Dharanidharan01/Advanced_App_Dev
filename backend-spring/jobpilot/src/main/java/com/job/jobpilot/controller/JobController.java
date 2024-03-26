package com.job.jobpilot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.jobpilot.dto.request.JobRequest;
import com.job.jobpilot.dto.request.JobUpdateRequest;
import com.job.jobpilot.dto.response.MessageResponse;
import com.job.jobpilot.model.Job;
import com.job.jobpilot.repository.JobRepo;
import com.job.jobpilot.service.JobService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
@Tag(name = "Admin Controls", description = "Endpoints for admin")
public class JobController {
    private final JobService jobService;
    private final JobRepo jobRepository;

    @PostMapping("/AddJob")
    @PreAuthorize("hasRole('Admin')")
    @Operation(summary = "Add Job", description = "Allows admin to create Job.")

    public ResponseEntity<?> createJob(@Valid @RequestBody JobRequest jobRequest) {
	    if (jobRepository.existsByJobName(jobRequest.getJobName())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: Job already enrolled!"));
	    }

		Job Job = new Job();
        Job.setJobName(jobRequest.getJobName());
        Job.setDescrption(jobRequest.getDescrption());
		Job.setSalary(jobRequest.getSalary());
        jobRepository.save(Job);
        return ResponseEntity.ok(new MessageResponse("Job added successfully!"));
    }

    @PutMapping("/Jobs/{JobId}")
	@PreAuthorize("hasRole('Admin')")
    public ResponseEntity<?> updateJob(@PathVariable Long JobId, @RequestBody JobUpdateRequest JobUpdateRequest) {
	    Job existingJob = jobRepository.findById(JobId)
	            .orElseThrow(() -> new RuntimeException("Error: Job not found."));

	    existingJob.setJobName(JobUpdateRequest.getJobName());
	    existingJob.setDescrption(JobUpdateRequest.getDescrption());
	    existingJob.setSalary(JobUpdateRequest.getSalary());
        jobRepository.save(existingJob);
        return ResponseEntity.ok(new MessageResponse("User updated successfully."));
    }


    @DeleteMapping("/Jobs/{jobId}")
	@PreAuthorize("hasRole('Admin')")
	public ResponseEntity<?> deleteJob(@PathVariable Long jobId) {
	    jobService.deleteJob(jobId);
	    return ResponseEntity.ok(new MessageResponse("Job deleted successfully."));
	}

}