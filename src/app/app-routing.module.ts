import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { CadastrarUsuarioComponent } from './components/cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { RecuperarSenhaComponent } from './components/cadastrar/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: 'cadastrar-usuario', component: CadastrarUsuarioComponent
  },
  {
    path: 'recuperar-senha', component: RecuperarSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
