import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {
  form: FormGroup;
  //educacion: any =[];
  educaciones: Educacion[] =[];
  //arriba sacar any y desmarcar el array

  constructor(
    private formBuilder: FormBuilder, 
    private educService:EducacionService,
    private router:Router) { 
    //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      curso:['',[Validators.required, Validators.minLength(3)]],
      institucion:['',[Validators.required, Validators.minLength(3)]],
      titulo_curso:[''],
      logo_educ:[''],
      inicio:[''],
      fin:[''],
    })
  }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  
  onUpdate():void{
    this.educService.edit(this.form.value), {
    }
  }

  get logo() {
    return this.form.get("logo");
  }

  get institucion() {
    return this.form.get("institucion");
  }

  get institInvalido(){
    return this.institucion?.errors && this.institucion?.touched;
  }

  get institValido(){
    return !this.institucion?.errors && this.institucion?.touched;
  }

  get curso() {
    return this.form.get("curso");
  }

  get cursoInvalido(){
    return this.curso?.errors && this.curso?.touched;
  }

  get cursoValido(){
    return !this.curso?.errors && this.curso?.touched;
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

  cargarEducacion(): void{
    this.educService.verEducaciones().subscribe({
      next: (data) => {
        this.educaciones=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

  cargarDetalle(id: number){
    this.educService.buscarEducacion(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }

  guardar() {
    let edu = this.form.value;
    if (edu.id == '') {
      this.educService.crearEducacion(edu).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su nueva educación se creo correctamente");
    } else {
      this.educService.editarEducacion(edu).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Se modificó correctamente");
    }
  }

  borrar(id: number) {
    if (confirm("Confirme si desea eliminar")) {
      this.educService.borrarEducacion(id).subscribe(data => {});
      window.location.reload();
      console.log("Se eliminó correctamente");
    }
  }

  limpiar() {
    console.log("Se limpió el formulario");
    this.form.reset();
  }

  volver(){
    this.router.navigate(['/dashboard']);
  }
}
