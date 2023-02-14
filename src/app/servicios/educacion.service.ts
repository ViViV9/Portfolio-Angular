import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http:HttpClient) { }
  getDatos():Observable<any>{
    return this.http.get('./assets/json/portfolio.json');
  }
}
