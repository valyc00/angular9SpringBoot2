package com.star.sud.user.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.star.sud.user.model.ERole;
import com.star.sud.user.model.Role;

public interface RoleRepositiry extends JpaRepository<Role, Integer> {

	Optional<Role> findByName(ERole name);

}
