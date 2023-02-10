import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ModalLogoutComponent } from './modals/modal-logout/modal-logout.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { AcercademiModalComponent } from './modales/acercademi-modal/acercademi-modal.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { FooterModalComponent } from './modales/footer-modal/footer-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { SkillModalComponent } from './modales/skill-modal/skill-modal.component';

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
    ErrorComponent,
    ModalLogoutComponent,
    RedesSocialesComponent,
    EducacionModalComponent,
    AcercademiModalComponent,
    BannerModalComponent,
    ExperienciaModalComponent,
    FooterModalComponent,
    ProyectosModalComponent,
    SkillModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
