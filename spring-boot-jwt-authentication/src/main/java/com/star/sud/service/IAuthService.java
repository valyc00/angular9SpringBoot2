package com.star.sud.service;

import org.springframework.http.ResponseEntity;

import com.star.sud.request.LoginRequest;
import com.star.sud.request.SignupRequest;

public interface IAuthService {

	ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

	ResponseEntity<?> registerUser(SignupRequest signupRequest);

}
