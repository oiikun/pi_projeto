import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  tipoBusca = 'cargo';
  buscaId: number | null = null;
  buscaNome = '';

  constructor(public funcService: FuncionarioService) {}

  get resultados() {
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
}