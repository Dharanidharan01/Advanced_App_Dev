package com.job.jobpilot.service;

import com.job.jobpilot.dto.request.LoginRequest;
import com.job.jobpilot.dto.request.RegisterRequest;
import com.job.jobpilot.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}