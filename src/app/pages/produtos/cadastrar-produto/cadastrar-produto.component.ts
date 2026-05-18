import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css'
})
export class CadastrarProdutoComponent {
  mensagem = '';

  novoProduto = {
    nome: '', categoria: '', precoVenda: 0, quantidade: 0, unidade: ''
  };

  constructor(public produtoService: ProdutoService) {}

  get total() {
    return this.produtoService.produtos.length;
  }

  cadastrar() {
    if (!this.novoProduto.nome || !this.novoProduto.categoria || !this.novoProduto.unidade) {
      this.mensagem = 'Preencha Nome, Categoria e Unidade!';
      return;
    }
    this.produtoService.cadastrar({ ...this.novoProduto });
    this.mensagem = 'Produto cadastrado com sucesso!';
    this.novoProduto = { nome: '', categoria: '', precoVenda: 0, quantidade: 0, unidade: '' };
  }
}