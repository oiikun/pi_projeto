import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService, Produto } from '../../../services/produto.service';

@Component({
  selector: 'app-consultar-produto',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './consultar-produto.component.html',
  styleUrl: './consultar-produto.component.css'
})
export class ConsultarProdutoComponent {
  tipoBusca = 'categoria';
  buscaId: number | null = null;
  buscaNome = '';
  categoriaSelecionada = '';

  constructor(public produtoService: ProdutoService, private router: Router) {}

  get resultados() {
    if (this.tipoBusca === 'categoria' && this.categoriaSelecionada) {
      return this.produtoService.produtos.filter(p => p.categoria === this.categoriaSelecionada);
    }
    if (this.tipoBusca === 'id' && this.buscaId) {
      return this.produtoService.produtos.filter(p => p.id === Number(this.buscaId));
    }
    if (this.tipoBusca === 'nome' && this.buscaNome) {
      return this.produtoService.produtos.filter(p =>
        p.nome.toLowerCase().includes(this.buscaNome.toLowerCase())
      );
    }
    return [];
  }

  editar(prod: Produto) {
    this.produtoService.produtoSelecionado = { ...prod };
    this.router.navigate(['/produtos/alterar']);
  }

  excluir(prod: Produto) {
    if (confirm(`Tem certeza que deseja excluir "${prod.nome}"?`)) {
      this.produtoService.produtos = this.produtoService.produtos.filter(p => p.id !== prod.id);
    }
  }
}