import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
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
  
  constructor(private formBuilder: FormBuilder, private personaServ: PersonaService, private router:Router) {
    //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required, Validators.minLength(3)]],
      apellido:['',[Validators.required, Validators.minLength(3)]],
      titulo:['',[Validators.required, Validators.minLength(3)]],
      foto_perfil:['',[Validators.required, Validators.minLength(3)]],
      textsobre_mi:['',[Validators.required, Validators.minLength(3)]],
      textsobre_mi2:['',[Validators.required, Validators.minLength(3)]],
      textsobre_mi3:['',[Validators.required, Validators.minLength(3)]],
      cv:[''],
    })
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
  get tituloInvalido(){
    return this.titulo?.errors && this.titulo?.touched;
  }
  get tituloValido(){
    return !this.titulo?.errors && this.titulo?.touched;
  }

  get foto_perfil() {
    return this.form.get("foto_perfil");
  }
  get foto_perfilInvalido(){
    return this.foto_perfil?.errors && this.foto_perfil?.touched;
  }
  get foto_perfilValido(){
    return !this.foto_perfil?.errors && this.foto_perfil?.touched;
  }

  get textsobre_mi() {
    return this.form.get("textsobre_mi");
  }
  get textsobre_miInvalido(){
    return this.textsobre_mi?.errors && this.textsobre_mi?.touched;
  }
  get textsobre_miValido(){
    return !this.textsobre_mi?.errors && this.textsobre_mi?.touched;
  }

  get textsobre_mi2() {
    return this.form.get("textsobre_mi2");
  }
  get textsobre_mi2Invalido(){
    return this.textsobre_mi2?.errors && this.textsobre_mi2?.touched;
  }
  get textsobre_mi2Valido(){
    return !this.textsobre_mi2?.errors && this.textsobre_mi2?.touched;
  }

  get textsobre_mi3() {
    return this.form.get("textsobre_mi3");
  }
  get textsobre_mi3Invalido(){
    return this.textsobre_mi3?.errors && this.textsobre_mi3?.touched;
  }
  get textsobre_mi3Valido(){
    return !this.textsobre_mi3?.errors && this.textsobre_mi3?.touched;
  }

  get cv(){
    return this.form.get("cv");
  }
  get cvInvalido(){
    return this.cv?.errors && this.cv?.touched;
  }
  get cvValido(){
    return !this.cv?.errors && this.cv?.touched;
  }

  get Persona(){
    return this.form.get("persona");
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

  ngOnInit(): void {
    this.cargarPersona();
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

  //borrar(id: number) {
   //if (confirm("Confirme si desea eliminar")) {
   //   this.personaServ.borrarPersona(id).subscribe(data => {});
    //  window.location.reload();
    //  console.log("Se eliminó correctamente");
    //}
  //}

  limpiar() {
    console.log("Se limpió el formulario");
    this.form.reset();
  }

  volver(){
    this.router.navigate(['/dashboard']);
  }

}
