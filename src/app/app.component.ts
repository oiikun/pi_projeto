import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CadastrarComponent],
  templateUrl: './app.component.html', // Volte para app.component.html aqui
  styleUrl: './app.component.css'
})
export class AppComponent { 
  title = 'projeto';
}