import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  novoFuncionario = { nome: '', posto: '', polo: '' };

  constructor(public funcService: FuncionarioService) {}

  cadastrar() {
    if (!this.novoFuncionario.nome || !this.novoFuncionario.posto || !this.novoFuncionario.polo) return;
    this.funcService.cadastrar(
      this.novoFuncionario.nome,
      this.novoFuncionario.posto,
      this.novoFuncionario.polo
    );
    this.novoFuncionario = { nome: '', posto: '', polo: '' };
  }
}