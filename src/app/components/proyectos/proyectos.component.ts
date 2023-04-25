import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //proyectos: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
proyectos: Proyecto[]= [];
constructor(private proyectoServ: ProyectoService) { }

ngOnInit(): void {
  this.cargarProyecto();
}

cargarProyecto():void{
  this.proyectoServ.verProyectos().subscribe(data => {
    this.proyectos=data})
}

//esto eliminar

 // constructor(private datos: PortfolioService) { }
 // usuarioLogueado= true
 // ngOnInit(): void {
  //  this.datos.getDatos().subscribe(datos => {
   //   this.proyectos=datos.proyectos;
  //  });
  //}

}
