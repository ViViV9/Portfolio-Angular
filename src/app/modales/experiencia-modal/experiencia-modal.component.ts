import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {
  form: FormGroup;
  experiencias: Experiencia[]= [];

  constructor(private formBuilder: FormBuilder,
    private expeService: ExperienciaService,
    private router:Router) {
      //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      nombre_empresa:['',[Validators.required, Validators.minLength(3)]],
      puesto:['',[Validators.required, Validators.minLength(3)]],
      logo:[''],
      desde:[''],
      hasta:[''],
    })
  }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

   onUpdate():void{
    this.expeService.editarExperiencia(this.form.value), {
   }
  }

  get nombre_empresa() {
    return this.form.get("nombre_empresa");
  }

  get nombre_empresaInvalido(){
    return this.nombre_empresa?.errors && this.nombre_empresa?.touched;
  }

  get nombre_empresaValido(){
    return !this.nombre_empresa?.errors && this.nombre_empresa?.touched;
  }

  get puesto() {
    return this.form.get("puesto");
  }

  get puestoInvalido(){
    return this.puesto?.errors && this.puesto?.touched;
  }

  get puestoValido(){
    return !this.puesto?.errors && this.puesto?.touched;
  }

  get logo() {
    return this.form.get("logo");
  }

  get desde() {
    return this.form.get("desde");
  }

  get hasta() {
    return this.form.get("hasta");
  }

  get Experiencia(){
    return this.form.get("experiencia");
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

  cargarExperiencia(): void{
    this.expeService.verExperiencias().subscribe({
      next: (data) => {
        this.experiencias=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  cargarDetalle(id: number){
    this.expeService.buscarExperiencia(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
       error: (e) => console.error(e),
        complete: () => console.info('complete')
    });
  }

  guardar() {
    let expe = this.form.value;
    if (expe.id == '') {
      this.expeService.crearExperiencia(expe).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su nueva experiencia se creo correctamente");
    } else {
      this.expeService.editarExperiencia(expe).subscribe({
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
      this.expeService.borrarExperiencia(id).subscribe(data => {});
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
