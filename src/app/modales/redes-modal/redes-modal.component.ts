import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redsocial } from 'src/app/model/redsocial';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes-modal',
  templateUrl: './redes-modal.component.html',
  styleUrls: ['./redes-modal.component.css']
})
export class RedesModalComponent implements OnInit {
  form: FormGroup;
  redes: Redsocial[] =[];
  constructor(
    private formBuilder: FormBuilder, 
    private redsService: RedesService,
    private router:Router) {
      //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      url:['',[Validators.required, Validators.minLength(3)]],
      icono_red:['',[Validators.required, Validators.minLength(3)]],
    })
  }

  get RedSocial(){
    return this.form.get("redSocial");
  }
  
  get url() {
    return this.form.get("url");
  }

  get urlInvalido(){
    return this.url?.errors && this.url?.touched;
  }

  get urlValido(){
    return !this.url?.errors && this.url?.touched;
  }

  get icono_red() {
    return this.form.get("icono_red");
  }

  get icono_redInvalido(){
    return this.icono_red?.errors && this.icono_red?.touched;
  }

  get icono_redValido(){
    return !this.icono_red?.errors && this.icono_red?.touched;
  }

  cargarRedSocial(): void{
    this.redsService.verRedesSociales().subscribe({
      next: (data) => {
        this.redes=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
  
  ngOnInit(): void {
    this.cargarRedSocial();
  }

  cargarDetalle(id: number){
    this.redsService.buscarRedSocial(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }

  guardar() {
    let reds = this.form.value;
    if (reds.id == '') {
      this.redsService.crearRedSocial(reds).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su red social se creo correctamente");
    } else {
      this.redsService.editarRedSocial(reds).subscribe({
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
      this.redsService.borrarRedSocial(id).subscribe(data => {});
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
