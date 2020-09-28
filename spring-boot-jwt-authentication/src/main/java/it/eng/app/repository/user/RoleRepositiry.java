package it.eng.app.repository.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;



public interface RoleRepositiry extends JpaRepository<Role, Integer> {

	Optional<Role> findByName(ERole name);

}
