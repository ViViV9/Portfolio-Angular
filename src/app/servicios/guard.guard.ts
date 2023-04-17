import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router)
  {}
  //#91
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Falta agregar del JWT en auth para luego quitar los comentarios. 
      let currentUser=this.authService.usuarioAutenticado;
      if (currentUser && currentUser.id){
        this.router.navigate(['dashboard']);
        return true;
      }
      else{
        this.router.navigate(["/login"]);
        return false;
      } 
  }
  
}
