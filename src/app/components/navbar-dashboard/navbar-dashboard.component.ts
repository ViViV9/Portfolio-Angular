import { Component, OnInit } from '@angular/core';
import { Redsocial } from 'src/app/model/redsocial';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {
  //redes: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
 redes: Redsocial[]=[];
 constructor(private redServ:RedesService) { }

 ngOnInit(): void {
  this.cargarRedSocial();
 }

cargarRedSocial():void{
  this.redServ.verRedesSociales().subscribe(data => {
    this.redes=data
  })
}

//esto eliminar
  
 //constructor(private datos: PortfolioService) { }
  //ngOnInit(): void {
   //this.datos.getDatos().subscribe(datos => {
     //this.redes=datos.redes;
   //});
 //}

}
