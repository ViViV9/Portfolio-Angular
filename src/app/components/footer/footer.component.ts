import { Component, OnInit } from '@angular/core';
import { RedesFooterService } from '../../servicios/redes-footer.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  redesFooter: any= [];

  constructor(private portfolioService: PortfolioService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(datos => {
      this.redesFooter=datos.redesFooter;
    });
  }

}
