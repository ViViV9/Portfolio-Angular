import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 
//url= 'http://localhost:8080/persona/'
url= 'https://portfoliobackendvd.onrender.com/persona/';
  constructor(private httpClient:HttpClient) { }

 public verPersonas(): Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.url + 'lista');
}

 public buscarPersona(id: number): Observable<Persona> {
  return this.httpClient.get<Persona>(this.url + `buscar/${id}`);
}

  public crearPersona(persona: Persona): Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', persona);
}

 public editarPersona(persona: Persona): Observable<any>{
  return this.httpClient.put<Persona>(this.url + 'editar', persona);
}

///public borrarPersona(id: number): Observable<Persona>{
  //return this.httpClient.delete<any>(this.url + `borrar/${id}`);
///}

}
