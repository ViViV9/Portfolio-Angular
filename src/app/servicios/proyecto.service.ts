import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
    
  // url= 'http://localhost:8080/proyecto/'
  url= 'https://portfoliobackendvd.onrender.com/proyecto/';
  constructor(private http:HttpClient) { }
  
  public verProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + 'lista');
  }

  public buscarProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + `buscar/${id}`);
  }

  public crearProyecto(proyect: Proyecto): Observable<any>{
    return this.http.post<any>(this.url + 'crear', proyect);
  }

  public editarProyecto(proyect: Proyecto): Observable<any>{
    return this.http.put<Proyecto>(this.url + 'editar', proyect);
  }

  public borrarProyecto(id: number): Observable<Proyecto>{
    return this.http.delete<any>(this.url + `borrar/${id}`);
  }
 
}
