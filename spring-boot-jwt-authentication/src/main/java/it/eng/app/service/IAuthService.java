package it.eng.app.service;

import org.springframework.http.ResponseEntity;

import it.eng.app.request.LoginRequest;
import it.eng.app.request.SignupRequest;

public interface IAuthService {

	ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

	ResponseEntity<?> registerUser(SignupRequest signupRequest);

}
