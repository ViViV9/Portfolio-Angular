import { Component, OnInit } from '@angular/core';
import { RedesFooterService } from '../../servicios/redes-footer.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Redsocialfooter } from 'src/app/model/redsocialfooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //redesFooter: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
 redesFooter: Redsocialfooter[]=[];
 constructor(private redSFooterServ: RedesFooterService) { }

 ngOnInit(): void {
  this.cargarRedSFooter();
 }

cargarRedSFooter():void{
  this.redSFooterServ.verRedSFooter().subscribe(data => {
    this.redesFooter=data})
}

//esto eliminar

  //constructor(private portfolioService: PortfolioService) { }
  //usuarioLogueado= true
 // ngOnInit(): void {
  //  this.portfolioService.getDatos().subscribe(datos => {
   //   this.redesFooter=datos.redesFooter;
   // });
 // }

}
