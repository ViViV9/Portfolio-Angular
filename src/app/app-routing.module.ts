import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Componentes/error/error.component';
import { IndexComponent } from './Componentes/index/index.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { SkillModalComponent } from './modales/skill-modal/skill-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { BannerModalComponent } from './modales/banner-modal/banner-modal.component';
import { AcercademiModalComponent } from './modales/acercademi-modal/acercademi-modal.component';



const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: '/index', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'editBanner/id', component: BannerModalComponent},
  {path: 'editPerfil/:id', component: AcercademiModalComponent},
  {path: 'editExperiencia/:id', component: ExperienciaModalComponent},
  {path: 'editEducacion/:id', component: EducacionModalComponent},
  {path: 'editHabilidad/:id', component: SkillModalComponent},
  {path: 'editProyecto/:id', component: ProyectosModalComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
