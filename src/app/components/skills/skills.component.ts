import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidades: any= [];

  constructor(private datos: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.habilidades= datos.habilidades;
    });
  }

}
