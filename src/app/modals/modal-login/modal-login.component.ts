import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/servicios/loginuser.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  //user: User= new User();

  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  //userLogin(){
    //console.log(this.user);
    //this.loginuserservice.
  //}
  

}
