import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
  form: FormGroup;
  
  //arriba sacar any 

  constructor(
    private formBuilder: FormBuilder, 
    private Educ:EducacionService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
    //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      institucion:[''],
      logo:[''],
      curso:['',[Validators.required]],
      desde:[''],
      hasta:[''],
    })
  }

  ngOnInit(): void {}
  
  onUpdate():void{
    this.Educ.edit(this.form.value), {
     
    }
  }

  get Educacion(){
    return this.form.get("educacion");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
