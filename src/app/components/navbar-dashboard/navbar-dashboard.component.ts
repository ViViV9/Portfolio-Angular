import { Component, OnInit } from '@angular/core';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {
  redes: any= [];
  constructor(private datos:RedesService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos => {
      this.redes=datos.redes;
    });
  }

}
