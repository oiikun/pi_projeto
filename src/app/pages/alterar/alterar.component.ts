import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FuncionarioService, Funcionario } from '../../services/funcionario.service';

@Component({
  selector: 'app-alterar',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './alterar.component.html',
  styleUrl: './alterar.component.css'
})
export class AlterarComponent {
  tipoBusca = 'funcionario';
  buscaId: number | null = null;
  buscaNome = '';
  abaAtiva = 'geral';
  mensagem = '';
  funcionarioEditando: Funcionario | null = null;

  constructor(public funcService: FuncionarioService) {}

  get resultados() {
    if (this.funcionarioEditando) return [];
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
    this.funcionarioEditando = { ...func };
    this.abaAtiva = 'geral';
    this.mensagem = '';
  }

  onPostoChange() {
    const posto = this.funcService.postos.find(p => p.nome === this.funcionarioEditando?.posto);
    if (posto && this.funcionarioEditando) {
      this.funcionarioEditando.salario = posto.salario;
    }
  }

  salvar() {
    if (!this.funcionarioEditando) return;
    const index = this.funcService.funcionarios.findIndex(f => f.id === this.funcionarioEditando!.id);
    if (index !== -1) {
      this.funcService.funcionarios[index] = { ...this.funcionarioEditando };
      this.mensagem = 'Funcionário atualizado com sucesso!';
      this.funcionarioEditando = null;
      this.buscaId = null;
      this.buscaNome = '';
    }
  }

  cancelar() {
    this.funcionarioEditando = null;
    this.mensagem = '';
  }
}