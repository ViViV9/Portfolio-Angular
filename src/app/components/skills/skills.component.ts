import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //habilidades: any= [];
  //sacar lo de arriba y reemplazar con lo de abajo
 habilidades: Habilidad[]=[];
 constructor(private habilidadServ: HabilidadService) { }

 ngOnInit(): void {
  this.cargarHabilidad();
 }

cargarHabilidad():void{
  this.habilidadServ.verHabilidades().subscribe(data => {
    this.habilidades=data})
}

//esto eliminar

  //constructor(private datos: PortfolioService) { }
  //usuarioLogueado= true
 // ngOnInit(): void {
   // this.datos.getDatos().subscribe(datos => {
    //  this.habilidades= datos.habilidades;
    //});
 // }

}
