import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { RegistroComponent } from './registro/registro.component';
import { SkillsComponent } from './skills/skills.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    FooterComponent,
    ProyectosComponent,
    ModalLoginComponent,
    RegistroComponent,
    SkillsComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
