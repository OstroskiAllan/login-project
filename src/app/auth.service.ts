import { usuariosMock } from './mocks/usuario.mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private loginUrl = 'http://127.0.0.1:8080/usuario'; // A URL para a API
                      
  constructor( private http: HttpClient) { }
  //login mockado
  login(nome: string, senha: string): Observable<any> {
    const usuario = usuariosMock.find(user => user.nome === nome && user.senha === senha);
    // Verifica se as credenciais são válidas (um exemplo muito básico)
    if (usuario) {
      // Retorna um objeto simulado de resposta do backend
      return of({ token: 'token_simulado', user: { nome: usuario.nome} });
    } else {
      // Retorna um erro simulado se as credenciais não forem válidas
      
      return throwError('Credenciais inválidas');
    }
  }

   // Simula o método isLoggedIn
   isLoggedIn(): boolean {
    // Aqui você pode verificar se o usuário está autenticado de alguma forma
    // No caso de um serviço real, você verificará o token ou outras informações de autenticação
    return !!localStorage.getItem('user');
  }

  //login api
  /* 
  login(nome: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/login`, {nome, senha });
  }

  /*isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }*/
}
