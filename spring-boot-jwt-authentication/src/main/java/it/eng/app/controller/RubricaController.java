package it.eng.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	
	@GetMapping("/rub/page")
	public ResponseEntity<?> findAllPage(@RequestParam(required = true) int page,
			@RequestParam(required = true) int numberPerPage ) {
		
		Pageable pageb = PageRequest.of(page, numberPerPage);
		Page<Rubrica> findAllPage = rubricaService.findAllPage(pageb);
		
		
		return new ResponseEntity<>(findAllPage, HttpStatus.OK);
	}
	
	@GetMapping("/rub/ins")
	public ResponseEntity<?> insert() {
	
		
		for (int i = 0; i < 100; i++) {
			
			Rubrica rub = new Rubrica();
			rub.setCognome("cif"+i);
			rub.setNome("val"+i);
			rub.setNumero("1234"+i);
			
			rubricaService.save(rub);
			
			
		}
		
		
		return new ResponseEntity<>("OK", HttpStatus.OK);
	}


	
}
