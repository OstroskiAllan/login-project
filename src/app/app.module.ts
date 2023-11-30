import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './template/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { RecuperarSenhaComponent } from './components/cadastrar/recuperar-senha/recuperar-senha.component';
import { CadastrarUsuarioComponent } from './components/cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { NavComponent } from './template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    RecuperarSenhaComponent,
    CadastrarUsuarioComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
