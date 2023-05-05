import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //url= 'http://localhost:8080/experiencia/'
  url= 'https://portfoliobackendvd.onrender.com/experiencia/';
  
  constructor(private httpClient:HttpClient) { }
  
  public verExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public buscarExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `buscar/${id}`);
  }

  public crearExperiencia(expe: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', expe);
  }

  public editarExperiencia(expe: Experiencia): Observable<any>{
    return this.httpClient.put<Experiencia>(this.url + 'editar', expe);
  }

  public borrarExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}
