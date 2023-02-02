import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miData:any

  constructor() { }

  ngOnInit(): void {
    /*this.getDatos().subscribe
    (datos => {
      this.miData = data;
    });*/
  }

}
