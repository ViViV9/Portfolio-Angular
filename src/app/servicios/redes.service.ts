import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redsocial } from '../model/redsocial';


@Injectable({
  providedIn: 'root'
})
export class RedesService {
   url= 'http://localhost:8080/redsocial/'

  constructor(private http:HttpClient) { }

  public verRedesSociales(): Observable<Redsocial[]>{
    return this.http.get<Redsocial[]>(this.url + 'lista');
  }

  public buscarRedSocial(id: number): Observable<Redsocial> {
    return this.http.get<Redsocial>(this.url+ 'buscar/${id}');
  }

  public crearRedSocial(reds: Redsocial): Observable<any>{
    return this.http.post<any>(this.url + 'crear', reds);
  }

  public editarRedSocial(reds: Redsocial): Observable<any>{
    return this.http.put<Redsocial>(this.url + 'editar', reds);
  }

  public borrarRedSocial(id: number): Observable<Redsocial>{
    return this.http.delete<any>(this.url + 'borrar/${id}');
  }
  
}
