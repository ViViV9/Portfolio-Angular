import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  redes: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
 //redes: Redsocial[]=[];
 //constructor(private redServ:RedesService) { }

 //ngOnInit(): void {
 // this.cargarRedSocial();
 //}

//cargarRedSocial():void{
  //this.redServ.verRedSociales().subscribe(data => {
   // this.redes=data})
//}

//esto eliminar
  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.redes=datos.redes;
    });
  }

}
