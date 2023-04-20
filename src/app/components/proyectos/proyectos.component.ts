import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
//proyectos: Proyecto[]=[];
//constructor(private proyectoServ: ProyectoService) { }

//ngOnInit(): void {
 // this.cargarProyecto();
//}

//cargarProyecto():void{
  //this.servExpe.verProyectos().subscribe(data => {
   // this.proyectos=data})
//}

//esto eliminar

  constructor(private datos: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.proyectos=datos.proyectos;
    });
  }

}
