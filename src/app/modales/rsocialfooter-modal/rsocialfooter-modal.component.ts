import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redsocialfooter } from 'src/app/model/redsocialfooter';
import { RedesFooterService } from 'src/app/servicios/redes-footer.service';

@Component({
  selector: 'app-rsocialfooter-modal',
  templateUrl: './rsocialfooter-modal.component.html',
  styleUrls: ['./rsocialfooter-modal.component.css']
})
export class RsocialfooterModalComponent implements OnInit {
  form: FormGroup;
  redesSFooter: Redsocialfooter[] =[];
  constructor( private formBuilder: FormBuilder, 
    private redSFooterServ: RedesFooterService,
    private router:Router) {
      //Controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      url:['',[Validators.required, Validators.minLength(3)]],
      icono_red:['',[Validators.required, Validators.minLength(3)]],
    })
     }

  ngOnInit(): void {
    this.cargarRedSFooter();
  }

  onUpdate():void{
    this.redSFooterServ.editarRedSFooter(this.form.value), {
    }
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
    return this.form.get("icono_redF");
  }

  get icono_redInvalido(){
    return this.icono_red?.errors && this.icono_red?.touched;
  }

  get icono_redValido(){
    return !this.icono_red?.errors && this.icono_red?.touched;
  }

  get RedSFooter(){
    return this.form.get("redSFooter");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  cargarRedSFooter(): void{
    this.redSFooterServ.verRedSocialesFooter().subscribe({
      next: (data) => {
        this.redesSFooter=data;
        console.log("Lista cargada correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

  cargarDetalle(id: number){
    this.redSFooterServ.buscarRedSFooter(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }

  guardar() {
    let rsfooter = this.form.value;
    if (rsfooter.id == '') {
      this.redSFooterServ.crearRedSFooter(rsfooter).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Su red social se creo correctamente");
    } else {
      this.redSFooterServ.editarRedSFooter(rsfooter).subscribe({
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
      this.redSFooterServ.borrarRedSFooter(id).subscribe(data => {});
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
