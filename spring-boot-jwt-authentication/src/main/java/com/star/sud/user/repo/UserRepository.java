package com.star.sud.user.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.star.sud.user.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

}
