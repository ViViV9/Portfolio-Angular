import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/servicios/loginuser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  //user: User= new User();
  form: FormGroup
  
  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      password:['', [Validators.required, Validators.
      minLength(8)]],
      email:['', [Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void {}


  get Mail(){
    return this.form.get("email")
  }

  get Password(){
    return this.form.get("password");
  }

  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){
      alert("Todo salio bien. Enviar Formulario")
    }else{
      this.form.markAllAsTouched();
    }
  }
  //userLogin(){
    //console.log(this.user);
    //this.loginuserservice.
  //}
  

}
