import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../servicios/service_educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any= [];

  constructor(private datos: EducacionService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.educaciones= datos.educaciones;
    });
  }
}
