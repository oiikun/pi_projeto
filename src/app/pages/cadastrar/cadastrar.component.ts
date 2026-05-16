import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  abaAtiva = 'geral';
  mensagem = '';

  novoFuncionario = {
    nome: '', cpf: '', rg: '', dataNascimento: '',
    posto: '', salario: 0, polo: '', celular: '', email: ''
  };

  constructor(public funcService: FuncionarioService) {}

  get total() {
    return this.funcService.funcionarios.length;
  }

  // Máscara CPF: 000.000.000-00
  mascaraCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    input.value = v;
    this.novoFuncionario.cpf = v;
  }

  // Máscara RG: 00.000.000-0
  mascaraRg(event: Event) {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').slice(0, 9);
    if (v.length > 8) v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    else if (v.length > 5) v = v.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,3})/, '$1.$2');
    input.value = v;
    this.novoFuncionario.rg = v;
  }

  // Máscara Celular: (00) 00000-0000
  mascaraCelular(event: Event) {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 7) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    else if (v.length > 0) v = v.replace(/(\d{0,2})/, '($1');
    input.value = v;
    this.novoFuncionario.celular = v;
  }

  onPostoChange() {
    const posto = this.funcService.postos.find(p => p.nome === this.novoFuncionario.posto);
    if (posto) this.novoFuncionario.salario = posto.salario;
  }

  cadastrar() {
    if (!this.novoFuncionario.nome || !this.novoFuncionario.posto || !this.novoFuncionario.polo) {
      this.mensagem = 'Preencha Nome, Posto e Polo!';
      return;
    }
    this.funcService.cadastrar({ ...this.novoFuncionario });
    this.mensagem = 'Funcionário cadastrado com sucesso!';
    this.novoFuncionario = { nome: '', cpf: '', rg: '', dataNascimento: '', posto: '', salario: 0, polo: '', celular: '', email: '' };
    this.abaAtiva = 'geral';
  }
}