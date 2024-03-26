package com.job.jobpilot.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.job.jobpilot.model.User;


public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Boolean existsByName(String name);
    Boolean existsByEmail(String email);
}