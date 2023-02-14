import { Injectable } from '@angular/core';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
//Esto es para suscribirse y que se reciba respuesta de forma asincrona
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//el primer http es el alias
  constructor(private http:HttpClient) { }

  //Metodo observable que devuelve datos
  getDatos(): Observable<any> { 
    //Se llama al JSON con su path "ruta", o en su lugar se puede poner una URL para traer datos de un json online
    return this.http.get('./assets/json/portfolio.json');
  }
}
