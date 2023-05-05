import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  //authService: any;

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "");

  constructor(private formBuilder: FormBuilder, private authServ: AuthService, private router: Router) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],      
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

  get Email(){
    return this.form.get('email')
  }
 
  get EmailValid(){
    return this.Email?.touched && !this.Email?.valid;
  }
  get Password(){
    return this.form.get('password');
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;
    if(this.form.valid){
      console.log(JSON.stringify(this.form.value));
      this.authServ.loginUser(this.form.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          alert("Puedes editar el portfolio");
          this.router.navigate(['/dashboard']);
        } else {
          alert("Error al iniciar sesión, credenciales no válidas!!!");
        }
      }, error => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! No tienes acceso");
      this.router.navigate(['/']);
    }
  }
  
  limpiar() {
    console.log("Se limpió el formulario");
    this.form.reset();
    this.router.navigate(['/']);
  }
}
