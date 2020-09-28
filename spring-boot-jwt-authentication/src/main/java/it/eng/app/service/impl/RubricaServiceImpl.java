package it.eng.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import it.eng.app.repository.rubrica.Rubrica;
import it.eng.app.repository.rubrica.RubricaRepository;
import it.eng.app.security.jjwt.JwtUtils;


@Service
public class RubricaServiceImpl implements IRubricaService  {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	RubricaRepository rubricaRepository;

	

	@Autowired
	JwtUtils jwtUtils;

	@Override
	public List<Rubrica> findAll() {
		List<Rubrica> findAll = rubricaRepository.findAll();
		
		return findAll;
	}

	
}
