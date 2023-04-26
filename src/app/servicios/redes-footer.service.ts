import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redsocialfooter } from '../model/redsocialfooter';

@Injectable({
  providedIn: 'root'
})
export class RedesFooterService {
    
   url= 'http://localhost:8080/redfooter/'
  constructor(private http:HttpClient) { }

  public verRedSFooter(): Observable<Redsocialfooter[]>{
    return this.http.get<Redsocialfooter[]>(this.url + 'lista');
  }

  public buscarRedSFooter(id: number): Observable<Redsocialfooter> {
    return this.http.get<Redsocialfooter>(this.url + `buscar/${id}`);
  }

  public crearRedSFooter(redfooter: Redsocialfooter): Observable<any>{
    return this.http.post<any>(this.url + 'crear', redfooter);
  }

  public editarRedSFooter(redfooter: Redsocialfooter): Observable<any>{
    return this.http.put<Redsocialfooter>(this.url + 'editar', redfooter);
  }

  public borrarRedSFooter(id: number): Observable<Redsocialfooter>{
    return this.http.delete<any>(this.url + `borrar/${id}`);
  }
}
