import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any= [];

  constructor(private datos: ExperienciaService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.experiencias= datos.experiencias;
    });
  }
}
