import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  id: string= '';
  curso: string= '';
  titulo: string= '';
  institucion: string= '';
  inicio: string= '';
  fin: string= '';
  logo: string= '';
  nombre_curso: string= '';
  

  constructor(private porfolioService: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(datos => {
      console.log(datos);
      this.id=datos.id;
      this.curso=datos.curso;
      this.titulo=datos.titulo;
      this.institucion=datos.institucion;
      this.inicio=datos.inicio;
      this.fin=datos.fin;
      this.logo=datos.logo;
      this.nombre_curso=datos.nombre_curso;
    });
  }
}
