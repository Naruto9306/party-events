import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correos, Personas, Municipio, Provincia, Pais } from 'src/app/models/modelos.model';

// http://localhost:8000/correos?format=json
const baseUrl = 'http://localhost:8000/';
// const baseUrlP = 'http://localhost:8000/personas';

@Injectable({
  providedIn: 'root'
})
export class dataService{
	constructor(private http: HttpClient){}

  // Servicios de la base de datos Correos
	ObtenerCorreos(): Observable<Correos[]> {
    return this.http.get<Correos[]>(baseUrl +'correos');
  }

  ObtenerId(id: any): Observable<Correos> {
    return this.http.get<Correos>(`${baseUrl+'correos'}/${id}`);
  }

  CrearCorreos(data: any): Observable<any> {
    return this.http.post(baseUrl+'correos', data);
  }

  ActualizarCorreo(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+'correos'}/${id}`, data);
  }

  deleteCorreos(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+'correos'}/${id}`);
  }

  deleteAllCorreos(): Observable<any> {
    return this.http.delete(baseUrl+'correos');
  }

  findByTitle(title: any): Observable<Correos[]> {
    return this.http.get<Correos[]>(`${baseUrl+'correos'}/?direccion=${title}`);
    // return this.http.get<Correos[]>(`${baseUrl}/?name=${title}`);
  }

  // Servicios de la base de datos Personas
  ObtenerPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(baseUrl+'personas');
  }

  ObtenerIdPersona(id: any): Observable<Personas> {
    return this.http.get<Personas>(`${baseUrl+'personas'}/${id}`);
  }

  CrearPersonas(data: any): Observable<any> {
    return this.http.post(baseUrl+'personas', data);
  }

  ActualizarPersonas(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+'personas'}/${id}`, data);
  }

  deletePersonas(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+'personas'}/${id}`);
  }

  deleteAllPersonas(): Observable<any> {
    return this.http.delete(baseUrl+'personas');
  }

  findByTitlePersonas(title: any): Observable<Personas[]> {
    return this.http.get<Personas[]>(`${baseUrl+'personas/'}?nombre=${title}`);
  }
	
}