import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  postos = [
    { id: 1, nome: 'Limpeza' },
    { id: 2, nome: 'Estoquista' },
    { id: 3, nome: 'Caixa' }
  ];

  funcionarios = [
    { id: 1, nome: 'Eduardo', posto: 'Estoquista' },
    { id: 2, nome: 'Murilo', posto: 'Limpeza' },
    { id: 3, nome: 'Nicolas', posto: 'Caixa' }
  ];

  novoFuncionario = { nome: '', posto: '' };

  cadastrar() {
    if (!this.novoFuncionario.nome || !this.novoFuncionario.posto) return;

    this.funcionarios.push({
      id: this.funcionarios.length + 1,
      nome: this.novoFuncionario.nome,
      posto: this.novoFuncionario.posto
    });

    // limpa o formulário
    this.novoFuncionario = { nome: '', posto: '' };
  }
}