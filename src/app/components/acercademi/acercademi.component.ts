import { Component, OnInit } from '@angular/core';
//import { PortfolioService } from '../../servicios/portfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  //textsobre_mi: string= '';
  //textsobre_mi2: string= '';
  //textsobre_mi3: string= '';
  //foto_perfil: string= '';

  //sacar lo de arriba y reemplazar con lo de abajo
  personas: Persona[]= [];
  constructor(private persoServ: PersonaService) { }

 ngOnInit(): void {
  this.cargarPersona();
 }

 cargarPersona():void{
  this.persoServ.verPersonas().subscribe(data => {
    this.personas=data})
}


  //constructor(private porfolioService: PortfolioService) { }
  //usuarioLogueado= true
 // ngOnInit(): void {
  //  this.porfolioService.getDatos().subscribe(datos => {
    //  console.log(datos);
    //  this.textsobre_mi=datos.textsobre_mi;
     // this.textsobre_mi2=datos.textsobre_mi2;
     // this.textsobre_mi3=datos.textsobre_mi3;
     // this.foto_perfil=datos.foto_perfil;
   // });
 // }
}

