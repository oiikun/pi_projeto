import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  buscaId: number | null = null;

  constructor(public funcService: FuncionarioService) {}

  get funcionarioEncontrado() {
  if (!this.buscaId) return [];
  const posto = this.funcService.postos.find(p => p.id === Number(this.buscaId));
  if (!posto) return [];
  return this.funcService.funcionarios.filter(f => f.posto === posto.nome);
}
}