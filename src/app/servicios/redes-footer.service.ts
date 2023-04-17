import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redsocialfooter } from '../model/redsocialfooter';

@Injectable({
  providedIn: 'root'
})
export class RedesFooterService {
  redSFooter() {
    throw new Error('Method not implemented.');
    }
  
   edit(value: any) {
      throw new Error('Method not implemented.');
    }
    
   url= 'http://localhost:8080/redSFooter/'
  constructor(private http:HttpClient) { }

  public verRedSocialesFooter(): Observable<Redsocialfooter[]>{
    return this.http.get<Redsocialfooter[]>(this.url + 'lista');
  }

  public buscarRedSFooter(id: number): Observable<Redsocialfooter> {
    return this.http.get<Redsocialfooter>(this.url+ 'buscar/${id}');
  }

  public crearRedSFooter(redSFooter: Redsocialfooter): Observable<any>{
    return this.http.post<any>(this.url + 'crear', redSFooter);
  }

  public editarRedSFooter(redSocial: Redsocialfooter): Observable<any>{
    return this.http.put<Redsocialfooter>(this.url + 'editar', redSocial);
  }

  public borrarRedSFooter(id: number): Observable<Redsocialfooter>{
    return this.http.delete<any>(this.url + 'borrar/${id}');
  }
}
