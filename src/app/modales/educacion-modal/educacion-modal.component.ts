import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
  form: FormGroup;
  educacion: any;
  //arriba sacar any 

  constructor(private formBuilder: FormBuilder, 
    private Educ:EducacionService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      institucion:[''],
      personaid:1,
   })
    }

  ngOnInit(): void {
  }
  
  onUpdate():void{
    this.Educ.edit(this.form.value), {
     
    }
  }

  get Educacion(){
    return this.form.get("educacion");
  }

  get Descripcion(){
    return this.form.get("descripcion");
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
