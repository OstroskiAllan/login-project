import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8080/usuario'; // A URL para a API
                      
  constructor(private http: HttpClient) { }

  login(nome: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/login`, {nome, senha });
  }

  /*isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }*/
}
