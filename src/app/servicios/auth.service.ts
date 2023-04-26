import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:string = 'http://localhost:8080/persona/login';
  //aca poner ej authUrl o url y agregar el link para unir back de render
  
  currentUserSubject: BehaviorSubject<any>;
//#91
  constructor(private httpClient: HttpClient) {
    console.log("Está corriendo el servicio de autenticación");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

loginUser(credenciales: any): Observable<any> {
 var httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
 return this.httpClient.post<any>(this.authUrl, credenciales, httpOptions).pipe(map(data => {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
    console.log("Servicio esta corriendo" + JSON.stringify(data));
  return data;
  }));
}

get usuarioAutenticado() {
  return this.currentUserSubject.value;
}

}

