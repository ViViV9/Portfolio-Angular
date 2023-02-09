import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesFooterService {

  constructor(private http:HttpClient) { }
  getDatos():Observable<any>{
    return this.http.get('./assets/json/portfolio.json');
  }
}
