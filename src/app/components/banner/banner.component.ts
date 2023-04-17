import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  nombre: string= '';
  apellido: string= '';
  titulo: string= '';

  constructor(private porfolioService: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(datos => {
      console.log(datos);
      this.nombre=datos.nombre;
      this.apellido=datos.apellido;
      this.titulo=datos.titulo;
    });
  }
  
}
