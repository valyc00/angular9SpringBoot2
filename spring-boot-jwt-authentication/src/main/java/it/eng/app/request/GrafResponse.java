package it.eng.app.request;

import java.util.ArrayList;
import java.util.List;

public class GrafResponse {

	
	private List<String> dati = new ArrayList<String>();
	
	private List<String> valori = new ArrayList<String>();

	
	public List<String> getDati() {
		return dati;
	}


	public void setDati(List<String> dati) {
		this.dati = dati;
	}


	public List<String> getValori() {
		return valori;
	}


	public void setValori(List<String> valori) {
		this.valori = valori;
	}


	

	

}
