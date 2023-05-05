import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //educaciones: any= [];
 educaciones: Educacion[]= [];
 constructor(private educServ: EducacionService) { }

 ngOnInit(): void {
  this.cargarEducacion();
 }

cargarEducacion():void{
  this.educServ.verEducaciones().subscribe(data => {
    this.educaciones=data})
  }


 // constructor(private datos: PortfolioService) { }
 // usuarioLogueado= true
 // ngOnInit(): void {
  //  this.datos.getDatos().subscribe(datos => {
   //   this.educaciones= datos.educaciones;
   // });
  //}
}
