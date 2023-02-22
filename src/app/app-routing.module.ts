import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { SkillModalComponent } from './modales/skill-modal/skill-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { AcercademiModalComponent } from './modales/acercademi-modal/acercademi-modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: '/index', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
