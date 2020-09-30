package it.eng.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import it.eng.app.repository.datiGraf.DatiGraf;
import it.eng.app.repository.datiGraf.DatiGrafRepository;
import it.eng.app.repository.rubrica.Rubrica;
import it.eng.app.repository.rubrica.RubricaRepository;
import it.eng.app.request.GrafResponse;
import it.eng.app.security.jjwt.JwtUtils;


@Service
public class TestServiceImpl implements ITestService  {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	DatiGrafRepository datiGrafRepository;

	

	@Autowired
	JwtUtils jwtUtils;

	@Override
	public GrafResponse findAll() {
		GrafResponse grafResponse = new GrafResponse();
		List<DatiGraf> findAll = datiGrafRepository.findAll();
		for (DatiGraf datiGraf : findAll) {
			
			grafResponse.getDati().add(datiGraf.getDato());
			grafResponse.getValori().add(datiGraf.getValore());
			
		}
		
		return grafResponse;
	}
	
	
	

	
}
