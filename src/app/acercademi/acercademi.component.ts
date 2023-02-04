import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  sobre_mi: string= '';
  sobre_mi2: string= '';
  sobre_mi3: string= '';
  foto_perfil: string= '';

  constructor(private porfolioService: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.porfolioService.getDatos().subscribe(datos => {
      console.log(datos);
      this.sobre_mi=datos.sobre_mi;
      this.sobre_mi2=datos.sobre_mi2;
      this.sobre_mi3=datos.sobre_mi3;
      this.foto_perfil=datos.foto_perfil;
    });
  }
}
