import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any= [];

  constructor(private datos:ProyectosService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.proyectos=datos.proyectos;
    });
  }

}
