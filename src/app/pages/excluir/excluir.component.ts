import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FuncionarioService, Funcionario } from '../../services/funcionario.service';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent {
  tipoBusca = 'funcionario';
  buscaId: number | null = null;
  buscaNome = '';
  mensagem = '';
  funcionarioParaExcluir: Funcionario | null = null;

  constructor(public funcService: FuncionarioService) {}

  get resultados() {
    if (this.funcionarioParaExcluir) return [];
    if (this.tipoBusca === 'cargo' && this.buscaId) {
      const posto = this.funcService.postos.find(p => p.id === Number(this.buscaId));
      if (!posto) return [];
      return this.funcService.funcionarios.filter(f => f.posto === posto.nome);
    }
    if (this.tipoBusca === 'funcionario' && this.buscaId) {
      return this.funcService.funcionarios.filter(f => f.id === Number(this.buscaId));
    }
    if (this.tipoBusca === 'nome' && this.buscaNome) {
      return this.funcService.funcionarios.filter(f =>
        f.nome.toLowerCase().includes(this.buscaNome.toLowerCase())
      );
    }
    return [];
  }

  selecionar(func: Funcionario) {
    this.funcionarioParaExcluir = { ...func };
    this.mensagem = '';
  }

  confirmarExclusao() {
    if (!this.funcionarioParaExcluir) return;
    this.funcService.funcionarios = this.funcService.funcionarios.filter(
      f => f.id !== this.funcionarioParaExcluir!.id
    );
    this.mensagem = `Funcionário "${this.funcionarioParaExcluir.nome}" excluído com sucesso!`;
    this.funcionarioParaExcluir = null;
    this.buscaId = null;
    this.buscaNome = '';
  }

  cancelar() {
    this.funcionarioParaExcluir = null;
    this.mensagem = '';
  }
}