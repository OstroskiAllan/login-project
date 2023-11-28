import { Router} from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome!: string;
  senha!: string;


  constructor(private authService: AuthService, private router: Router){}

  onLogin(): void{
    this.authService.login(this.nome, this.senha).subscribe(
      data => {
        if (data && data.token) {
          // Login bem-sucedido, redirecione para o dashboard
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        } else {
          // Login falhou, redirecione para a página de erro
          this.router.navigate(['/error']);
        }
      },
      error => {
        // Erro na solicitação, redirecione para a página de erro
        this.router.navigate(['/error']);
      }
    );
  }

}
