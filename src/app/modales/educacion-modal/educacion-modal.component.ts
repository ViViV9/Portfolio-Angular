import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router } from '@angular/router';
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
      titulo_curso:['',[Validators.required, Validators.minLength(3)]],
      logo_educ:[''],
      inicio:['',[Validators.required, Validators.minLength(4)]],
      fin:['',[Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  
  onUpdate():void{
    this.educService.editarEducacion(this.form.value), {
    }
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

  get titulo_curso(){
    return this.form.get("titulo_curso");
  }
  get titulo_cursoInvalido(){
    return this.titulo_curso?.errors && this.titulo_curso?.touched;
  }
  get titulo_cursoValido(){
    return !this.titulo_curso?.errors && this.titulo_curso?.touched;
  }
  
  get logo_educ() {
    return this.form.get("logo_educ");
  }
  get logo_educInvalido(){
    return this.logo_educ?.errors && this.logo_educ?.touched;
  }
  get logo_educValido(){
    return !this.logo_educ?.errors && this.logo_educ?.touched;
  }

  get inicio(){
    return this.form.get("inicio");
  }
  get inicioInvalido(){
    return this.inicio?.errors && this.inicio?.touched;
  }
  get inicioValido(){
    return !this.inicio?.errors && this.inicio?.touched;
  }

  get fin(){
    return this.form.get("fin");
  }
  get finInvalido(){
    return this.fin?.errors && this.fin?.touched;
  }
  get finValido(){
    return !this.fin?.errors && this.fin?.touched;
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
    let educ = this.form.value;
    if (educ.id == '') {
      this.educService.crearEducacion(educ).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su nueva educación se creo correctamente");
    } else {
      this.educService.editarEducacion(educ).subscribe({
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
