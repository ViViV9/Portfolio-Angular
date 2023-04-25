import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //experiencias: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
experiencias: Experiencia[]= [];
constructor(private servExpe: ExperienciaService) { }

ngOnInit(): void {
  this.cargarExperiencia();
}

cargarExperiencia():void{
  this.servExpe.verExperiencias().subscribe(data => {
    this.experiencias=data})
}

//esto eliminar
 //constructor(private datos: PortfolioService) { }
 //usuarioLogueado= true
 //ngOnInit(): void {
  //  this.datos.getDatos().subscribe(datos => {
  //    this.experiencias= datos.experiencias;
   // });
  //}
}
