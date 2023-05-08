import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements OnInit {
  form: FormGroup;
  proyectos: Proyecto[]= [];

  constructor(
    private formBuilder: FormBuilder,
    private proyectoServ: ProyectoService,
    private router:Router) {
      //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      titulo_proyecto:['',[Validators.required, Validators.minLength(3)]],
      descripcion:['',[Validators.required, Validators.minLength(8)]],
      imagen_proyecto:[''],
      url_proyecto:['',[Validators.required, Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  onUpdate():void{
    this.proyectoServ.editarProyecto(this.form.value), {
    }
  }

  get titulo_proyecto(){
    return this.form.get("titulo_proyecto");
  }
  get titulo_proyectoInvalido(){
    return this.titulo_proyecto?.errors && this.titulo_proyecto?.touched;
  }
  get titulo_proyectoValido(){
    return !this.titulo_proyecto?.errors && this.titulo_proyecto?.touched;
  }

  get descripcion(){
    return this.form.get("descripcion");
  }
  get descripcionInvalido(){
    return this.descripcion?.errors && this.descripcion?.touched;
  }
  get descripcionValido(){
    return !this.descripcion?.errors && this.descripcion?.touched;
  }

  get imagen_proyecto(){
    return this.form.get("imagen_proyecto");
  }
  get imagen_proyectoInvalido(){
    return this.imagen_proyecto?.errors && this.imagen_proyecto?.touched;
  }
  get imagen_proyectoValido(){
    return !this.imagen_proyecto?.errors && this.imagen_proyecto?.touched;
  }

  get url_proyecto(){
    return this.form.get("url_proyecto");
  }
  get url_proyectoInvalido(){
    return this.url_proyecto?.errors && this.url_proyecto?.touched;
  }
  get url_proyectoValido(){
    return !this.url_proyecto?.errors && this.url_proyecto?.touched;
  }


  get Proyecto(){
    return this.form.get("proyecto");
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

  cargarProyecto(): void{
    this.proyectoServ.verProyectos().subscribe({
      next: (data) => {
        this.proyectos=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

  cargarDetalle(id: number){
    this.proyectoServ.buscarProyecto(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }

  guardar() {
    let proyect = this.form.value;
    if (proyect.id == '') {
      this.proyectoServ.crearProyecto(proyect).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su nuevo proyecto se creo correctamente");
    } else {
      this.proyectoServ.editarProyecto(proyect).subscribe({
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
      this.proyectoServ.borrarProyecto(id).subscribe(data => {});
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
