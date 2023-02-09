import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }

  getDatos():Observable<any>{
    return this.http.get('./assets/json/portfolio.json');
  }
}
