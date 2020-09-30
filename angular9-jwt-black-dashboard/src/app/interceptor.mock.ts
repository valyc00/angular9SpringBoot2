import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { CommonsFakeService } from './fake/commons.fake.service';



import { delay } from 'rxjs/internal/operators';

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  public resourceUrl = 'api';
  // public patternId = new RegExp("clienti/[0-9]");
  public patternId = new RegExp('clienti/[0-9]+$');

  constructor(

    private commonsFakeService: CommonsFakeService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("URL::" + request.url);

    if (request.url.includes(this.resourceUrl + 'aaaaa')) {

      if (request.url.endsWith('/numerazioni') && request.method === 'GET') {
        // return this.gestioneUtenzeNHFakeService.getListaListaNumerazioniNH().pipe(delay(500));;
      }
      else {
        return next.handle(request);
      }
    }
    else if (request.url.includes(this.resourceUrl + '/auth/signin') && request.method === 'POST') {
      return this.commonsFakeService.login().pipe(delay(500));
    }
    else if (request.url.includes(this.resourceUrl + '/rubrica/rub/page') && request.method === 'GET') {
      return this.commonsFakeService.getRubricaPag().pipe(delay(500));
    }
    else if (request.url.includes(this.resourceUrl + '/rubrica/rub') && request.method === 'GET') {
      return this.commonsFakeService.getRubrica().pipe(delay(500));
    }
    

    else {
      return next.handle(request);
    }
  }
}
