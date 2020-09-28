import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from '../app.settings';

const API_URL = AppSettings.API_ENDPOINT+'/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  constructor(private http: HttpClient) { }

 

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'rubrica/rub', { responseType: 'json' });
  }
 
  findAllPaged(page:Number,numPerPage: Number): Observable<any> {
    return this.http.get(API_URL + 'rubrica/rub/page/?page='+page+'&numberPerPage='+numPerPage, { responseType: 'json' });
  }

  

}
