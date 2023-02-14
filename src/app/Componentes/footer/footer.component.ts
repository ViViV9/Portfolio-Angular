import { Component, OnInit } from '@angular/core';
import { RedesFooterService } from '../../servicios/redes-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  redesFotter: any= [];

  constructor(private datos: RedesFooterService) { }
  usuarioLogueado= true
  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.redesFotter=datos.redesFotter;
    });
  }

}
