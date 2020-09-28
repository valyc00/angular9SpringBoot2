import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';


import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonsFakeService {
  constructor(
    protected http: HttpClient

  ) { }


  getRubrica():any {
    const body =
    [
      {
         "id":1,
         "nome":"val0",
         "cognome":"cif0",
         "numero":"12340"
      },
      {
         "id":2,
         "nome":"val1",
         "cognome":"cif1",
         "numero":"12341"
      },
      {
         "id":3,
         "nome":"val2",
         "cognome":"cif2",
         "numero":"12342"
      },
      {
         "id":4,
         "nome":"val3",
         "cognome":"cif3",
         "numero":"12343"
      },
      {
         "id":5,
         "nome":"val4",
         "cognome":"cif4",
         "numero":"12344"
      },
      {
         "id":6,
         "nome":"val5",
         "cognome":"cif5",
         "numero":"12345"
      },
      {
         "id":7,
         "nome":"val6",
         "cognome":"cif6",
         "numero":"12346"
      }
     
   ]

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
