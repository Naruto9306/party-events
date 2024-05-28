import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos, Personas, Municipio, Provincia, Pais } from 'src/app/models/modelos.model';

// http://localhost:8000/correos?format=json
const baseUrl = 'http://localhost:8000/correos';
const baseUrlP = 'http://localhost:8000/personas';

@Injectable({
  providedIn: 'root'
})
export class dataService{
	constructor(private http: HttpClient){}

  // Servicios de la base de datos Correos
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

  // Servicios de la base de datos Personas
  ObtenerPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(baseUrlP);
  }

  ObtenerIdPersona(id: any): Observable<Personas> {
    return this.http.get<Personas>(`${baseUrlP}/${id}`);
  }

  CrearPersonas(data: any): Observable<any> {
    return this.http.post(baseUrlP, data);
  }

  ActualizarPersonas(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrlP}/${id}`, data);
  }

  deletePersonas(id: any): Observable<any> {
    return this.http.delete(`${baseUrlP}/${id}`);
  }

  deleteAllPersonas(): Observable<any> {
    return this.http.delete(baseUrlP);
  }

  findByTitlePersonas(title: any): Observable<Personas[]> {
    return this.http.get<Personas[]>(`${baseUrlP}?title=${title}`);
  }
	
}