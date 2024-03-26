// package com.job.jobpilot.repository;

// import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.Optional;
// import com.job.jobpilot.model.Job;

// public interface JobRepo extends JpaRepository<Job, Long> {
//     Optional<Job> findByEmail(String email);
//     Boolean existsByName(String name);
//     Boolean existsByEmail(String email);
// }
package com.job.jobpilot.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.job.jobpilot.model.Job;

public interface JobRepo extends JpaRepository<Job, Long> {
    Optional<Job> findByJobName(String jobName);
    Boolean existsByJobName(String jobName);
}