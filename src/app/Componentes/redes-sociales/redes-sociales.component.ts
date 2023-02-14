import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../servicios/redes.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  redes: any= [];
  constructor(private datos:RedesService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.redes=datos.redes;
    });
  }

}
