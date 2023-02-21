import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../../servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidades: any= [];

  constructor(private datos: HabilidadService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.habilidades= datos.habilidades;
    });
  }

}
