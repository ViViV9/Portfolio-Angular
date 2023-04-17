import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { RegistroComponent } from './registro/registro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IndexComponent } from './components/index/index.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalLogoutComponent } from './modals/modal-logout/modal-logout.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { PersonaModalComponent } from './modales/persona-modal/persona-modal.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { SkillModalComponent } from './modales/skill-modal/skill-modal.component';
import { RedesModalComponent } from './modales/redes-modal/redes-modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { RsocialfooterModalComponent } from './modales/rsocialfooter-modal/rsocialfooter-modal.component';

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
    PersonaModalComponent,
    BannerModalComponent,
    ExperienciaModalComponent,
    ProyectosModalComponent,
    SkillModalComponent,
    RedesModalComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    RsocialfooterModalComponent
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
