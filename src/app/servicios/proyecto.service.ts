import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyecto() {
    throw new Error('Method not implemented.');
    }
  
   edit(value: any) {
      throw new Error('Method not implemented.');
    }
    
   url= 'http://localhost:8080/proyecto/'

  constructor(private http:HttpClient) { }
  
  public verProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + 'lista');
  }

  public buscarProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url+ 'buscar/${id}');
  }

  public crearProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.url + 'crear', proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.put<Proyecto>(this.url + 'editar', proyecto);
  }

  public borrarProyecto(id: number): Observable<Proyecto>{
    return this.http.delete<any>(this.url + 'borrar/${id}');
  }
 
 
  getDatos():Observable<any>{
    return this.http.get('./assets/json/portfolio.json');
  }
}