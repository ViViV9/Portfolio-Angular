import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  sobre_mi: string= '';
  foto_perfil: string= '';

  constructor(private porfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(datos => {
      console.log(datos);
      this.sobre_mi=datos.sobre_mi;
      this.foto_perfil=datos.foto_perfil;
    });
  }
}
