import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent implements OnInit {
  form: FormGroup;
  habilidades: Habilidad []= [];

  constructor(
    private formBuilder: FormBuilder, 
    private skillServ: HabilidadService,
    private router:Router) {
    //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      nombre_skill:['',[Validators.required]],
      span:['',[Validators.required]],
      porcentaje:['',[Validators.required]],

    })
  }
 
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get nombre_skill() {
    return this.form.get("nombre_skill");
  }
  get nombre_skillInvalido(){
    return this.nombre_skill?.errors && this.nombre_skill?.touched;
  }
  get nombre_skillValido(){
    return !this.nombre_skill?.errors && this.nombre_skill?.touched;
  }

  get span() {
    return this.form.get("span");
  }
  get spanInvalido(){
    return this.span?.errors && this.span?.touched;
  }
  get spanValido(){
    return !this.span?.errors && this.span?.touched;
  }

  get porcentaje() {
    return this.form.get("porcentaje");
  }
  get porcentajeInvalido(){
    return this.porcentaje?.errors && this.porcentaje?.touched;
  }
  get porcentajeValido(){
    return !this.porcentaje?.errors && this.porcentaje?.touched;
  }

  cargarHabilidad(): void{
    this.skillServ.verHabilidades().subscribe({
      next: (data) => {
        this.habilidades=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarDetalle(id: number){
    this.skillServ.buscarHabilidad(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  guardar() {
    let skill = this.form.value;
    if (skill.id == '') {
      this.skillServ.crearHabilidad(skill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su nueva habilidad se creo correctamente");
    } else {
      this.skillServ.editarHabilidad(skill).subscribe({
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
      this.skillServ.borrarHabilidad(id).subscribe(data => {});
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
