import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
 //educaciones: Educacion[]=[];
 //constructor(private educServ: EducacionService) { }

 //ngOnInit(): void {
 // this.cargarEducacion();
 //}

//cargarEducacion():void{
  //this.educServ.verEducaciones().subscribe(data => {
   // this.educaciones=data})
//}

//esto eliminar

  constructor(private datos: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.educaciones= datos.educaciones;
    });
  }
}
