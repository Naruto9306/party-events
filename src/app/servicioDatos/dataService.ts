import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos } from './correos';

// http://localhost:8000/correos?format=json
const baseUrl = 'http://localhost:8000/correos';

@Injectable({
  providedIn: 'root'
})
export class dataService{
	constructor(private http: HttpClient){}

	private headers = new Headers({'Content-Type': 'Application/json'});

	ObtenerCorreos(): Observable<Correos[]> {
    return this.http.get<Correos[]>(baseUrl);
  }

  ObtenerId(id: any): Observable<Correos> {
    return this.http.get<Correos>(`${baseUrl}/${id}`);
  }

  CrearCorreos(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  ActualizarCorreo(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteCorreos(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllCorreos(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Correos[]> {
    return this.http.get<Correos[]>(`${baseUrl}?title=${title}`);
  }
	
}