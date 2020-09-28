package it.eng.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.eng.app.repository.rubrica.Rubrica;
import it.eng.app.service.impl.IRubricaService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/rubrica")
public class RubricaController {

	@Autowired
	private IRubricaService rubricaService;

	@GetMapping("/rub")
	public ResponseEntity<?> findAll() {
		List<Rubrica> findAll = rubricaService.findAll();
		
		
		return new ResponseEntity<>(findAll, HttpStatus.OK);
	}

	
}
