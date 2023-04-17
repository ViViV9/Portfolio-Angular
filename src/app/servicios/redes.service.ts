import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redsocial } from '../model/redsocial';


@Injectable({
  providedIn: 'root'
})
export class RedesService {
  redSocial() {
    throw new Error('Method not implemented.');
    }
  
   edit(value: any) {
      throw new Error('Method not implemented.');
    }
    
   url= 'http://localhost:8080/redSocial/'

  constructor(private http:HttpClient) { }

  public verRedSociales(): Observable<Redsocial[]>{
    return this.http.get<Redsocial[]>(this.url + 'lista');
  }

  public buscarRedSocial(id: number): Observable<Redsocial> {
    return this.http.get<Redsocial>(this.url+ 'buscar/${id}');
  }

  public crearRedSocial(redSocial: Redsocial): Observable<any>{
    return this.http.post<any>(this.url + 'crear', redSocial);
  }

  public editarRedSocial(redSocial: Redsocial): Observable<any>{
    return this.http.put<Redsocial>(this.url + 'editar', redSocial);
  }

  public borrarRedSocial(id: number): Observable<Redsocial>{
    return this.http.delete<any>(this.url + 'borrar/${id}');
  }
  
  getDatos():Observable<any>{
    return this.http.get('./assets/json/portfolio.json');
  }
}
