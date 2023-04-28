import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
    
 //url= 'http://localhost:8080/habilidad/'
  url= 'https://portfoliobackendvd.onrender.com/habilidad/';
  constructor(private http:HttpClient) { }

  public verHabilidades(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url + 'lista');
  }

  public buscarHabilidad(id: number): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.url + `buscar/${id}`);
  }

  public crearHabilidad(skill: Habilidad): Observable<any>{
    return this.http.post<any>(this.url + 'crear', skill);
  }

  public editarHabilidad(skill: Habilidad): Observable<any>{
    return this.http.put<Habilidad>(this.url + 'editar', skill);
  }

  public borrarHabilidad(id: number): Observable<Habilidad>{
    return this.http.delete<any>(this.url + `borrar/${id}`);
  }

}
