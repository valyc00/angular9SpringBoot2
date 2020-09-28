package it.eng.app.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import it.eng.app.repository.user.ERole;
import it.eng.app.repository.user.Role;
import it.eng.app.repository.user.RoleRepositiry;
import it.eng.app.repository.user.User;
import it.eng.app.repository.user.UserRepository;
import it.eng.app.request.LoginRequest;
import it.eng.app.request.MessageResponse;
import it.eng.app.request.SignupRequest;
import it.eng.app.security.jjwt.JwtUtils;
import it.eng.app.security.request.JwtResponse;
import it.eng.app.security.service.UserDetailsImpl;
import it.eng.app.service.IAuthService;


@Service
public class AuthServiceImpl implements IAuthService {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepositiry roleRepositiry;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@Override
	public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
	}

	@Override
	public ResponseEntity<?> registerUser(SignupRequest signupRequest) {
		if (userRepository.existsByUsername(signupRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signupRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		User user = new User(signupRequest.getUsername(), signupRequest.getEmail(),
				encoder.encode(signupRequest.getPassword()));

		Set<String> stRoles = signupRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (stRoles == null) {

			Role useRole = roleRepositiry.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is notfound."));
			roles.add(useRole);
		} else {
			stRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepositiry.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is notfound."));
					roles.add(adminRole);
				case "mod":
					Role modRole = roleRepositiry.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);
					break;
				default:

					Role userRole = roleRepositiry.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

}
