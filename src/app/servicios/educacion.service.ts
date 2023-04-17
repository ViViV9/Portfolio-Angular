import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 educacion() {
  throw new Error('Method not implemented.');
  }

 edit(value: any) {
    throw new Error('Method not implemented.');
  }
  
 url= 'http://localhost:8080/educacion/'
  constructor(private http:HttpClient) { }


  public verEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + 'lista');
  }

  public buscarEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.url+ 'buscar/${id}');
  }

  public crearEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.url + 'crear', educacion);
  }

  public editarEducacion(educacion: Educacion): Observable<any>{
    return this.http.put<Educacion>(this.url + 'editar', educacion);
  }

  public borrarEducacion(id: number): Observable<Educacion>{
    return this.http.delete<any>(this.url + 'borrar/${id}');
  }
  
  getDatos():Observable<any>{
   return this.http.get('./assets/json/portfolio.json');
  }

  
}
  
