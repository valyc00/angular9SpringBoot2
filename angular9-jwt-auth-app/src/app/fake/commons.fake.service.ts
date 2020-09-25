import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';


import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonsFakeService {
  constructor(
    protected http: HttpClient

  ) { }


  getFatturazioneEtna():any {
    const body =
    {
      "codiceReseller": 1,
      "dataInserimento": "01/12/2020",
      "nomeDestinatarioFattura": "Mario",
      "cognomeDestinatarioFattura": "Bianchi",
      "particellaToponomFattura": "01",
      "viaFattura": "via Anselmi",
      "numeroCivicoFattura": "61",
      "scalaFattura": "A",
      "internoFattura": "1",
      "capFattura": "00100",
      "frazioneFattura": "FR",
      "comuneFattura": "ROMA",
      "provinciaFattura": "ROMA",
      "nomeRagsocialeDealer": "Eolo",
      "partitaIvaDealer": "1234567",
      "particellaToponomDealer ": "12",
      "viaDealer": "via Roma",
      "numeroCivicoDealer": "1",
      "scalaDealer": "B",
      "internoDealer": "1",
      "capDealer": "00100",
      "frazioneDealer": "FR",
      "comuneDealer": "ROMA",
      "provinciaDealer": "ROMA"
    }


      return of(new HttpResponse({ status: 200, body}));
  }


  ok():any {
    const body = {};
      return of(new HttpResponse({ status: 200, body}));
  }




  login(): any {
    const body =
    {
      "id":3,
      "username":"admin",
      "email":"ad@tin.it",
      "roles":[
         "ROLE_USER"
      ],
      "accessToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYwMTAzNDgwMiwiZXhwIjoxNjAxMTIxMjAyfQ.hzqfM-GLhxRl-ZMAm-oZvdpkSP-GQ4silzv5M1ew8a9LQ0zRLJSxs1rcrUKFgSvIdywfY8CcfhhU9CLcmJAE5A",
      "tokenType":"Bearer"
    }

      ;

    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ');

    return of(new HttpResponse({ status: 200, body, headers }));
  }


}
