import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona-modal', 
  templateUrl: './persona-modal.component.html', 
  styleUrls: ['./persona-modal.component.css']
})
export class PersonaModalComponent implements OnInit {
  form: FormGroup;
  personas: Persona []= [];
  
  constructor(private formBuilder: FormBuilder, 
    private personaServ: PersonaService, 
    private router:Router) {
      //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required, Validators.minLength(3)]],
      apellido:['',[Validators.required, Validators.minLength(3)]],
      titulo:[''],
      foto_perfil:[''],
      textsobre_mi:[''],
      textsobre_mi2:[''],
      textsobre_mi3:[''],
      cv:[''],
    })
     }

  ngOnInit(): void {
    this.cargarPersona();
  }
  
  onUpdate():void{
   this.personaServ.editarPersona(this.form.value).subscribe(data => {
    alert("La persona ha sido modificada.");
    this.router.navigate(['']);
   }), {
   }
  }

  get nombre() {
    return this.form.get("nombre");
  }

  get nombreInvalido(){
    return this.nombre?.errors && this.nombre?.touched;
  }

  get nombreValido(){
    return !this.nombre?.errors && this.nombre?.touched;
  }

  get apellido() {
    return this.form.get("apellido");
  }

  get apellidoInvalido(){
    return this.apellido?.errors && this.apellido?.touched;
  }

  get apellidoValido(){
    return !this.apellido?.errors && this.apellido?.touched;
  }

  get titulo() {
    return this.form.get("titulo");
  }

  get foto_perfil() {
    return this.form.get("foto_perfil");
  }

  get textsobre_mi() {
    return this.form.get("textsobre_mi");
  }
  
  get textsobre_mi2() {
    return this.form.get("textsobre_mi2");
  }

  get textsobre_mi3() {
    return this.form.get("textsobre_mi3");
  }

  get cv(){
    return this.form.get("cv");
  }

  get Persona(){
    return this.form.get("persona");
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

  cargarPersona(): void{
    this.personaServ.verPersonas().subscribe({
      next: (data) => {
        this.personas=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  cargarDetalle(id: number){
    this.personaServ.buscarPersona(id).subscribe({
      next: (data) => {
       this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  guardar() {
    let perso = this.form.value;
    if (perso.id == '') {
      this.personaServ.crearPersona(perso).subscribe({
        next: (data) => {
        this.limpiar();
      },
       error: (e) => console.error(e),
       complete: () => console.info('complete')
       });
      window.location.reload();
      console.log("La persona se creo correctamente");
    } else {
      this.personaServ.editarPersona(perso).subscribe({
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
      this.personaServ.borrarPersona(id).subscribe(data => {});
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
