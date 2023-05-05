import { Component, OnInit } from '@angular/core';
import { Redsocial } from 'src/app/model/redsocial';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  //redes: any= [];
  
 redes: Redsocial[]= [];
 constructor(private redsocServ:RedesService) { }

 ngOnInit(): void {
  this.cargarRedSocial();
 }

cargarRedSocial():void{
  this.redsocServ.verRedesSociales().subscribe(data => {
    this.redes=data})
}


 // constructor(private datos: PortfolioService) { }

 // ngOnInit(): void {
   // this.datos.getDatos().subscribe(datos => {
   //   this.redes=datos.redes;
    //});
 // }

}
