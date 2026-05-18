import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  precoVenda: number;
  quantidade: number;
  unidade: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  categorias = [
    { id: 1, nome: 'Laticínios' },
    { id: 2, nome: 'Hortifruti' },
    { id: 3, nome: 'Bebidas' },
    { id: 4, nome: 'Padaria' },
    { id: 5, nome: 'Frios' },
    { id: 6, nome: 'Mercearia' },
    { id: 7, nome: 'Limpeza' },
    { id: 8, nome: 'Higiene Pessoal' }
  ];

  unidades = ['un', 'kg', 'L', 'g', 'ml', 'cx', 'pct'];

  produtos: Produto[] = [
    { id: 1,  nome: 'Leite Integral',       categoria: 'Laticínios',     precoVenda: 4.99,  quantidade: 120, unidade: 'L'  },
    { id: 2,  nome: 'Queijo Mussarela',     categoria: 'Laticínios',     precoVenda: 39.90, quantidade: 45,  unidade: 'kg' },
    { id: 3,  nome: 'Iogurte Natural',      categoria: 'Laticínios',     precoVenda: 3.50,  quantidade: 80,  unidade: 'un' },
    { id: 4,  nome: 'Banana Prata',         categoria: 'Hortifruti',     precoVenda: 5.90,  quantidade: 200, unidade: 'kg' },
    { id: 5,  nome: 'Tomate',               categoria: 'Hortifruti',     precoVenda: 7.90,  quantidade: 150, unidade: 'kg' },
    { id: 6,  nome: 'Alface',               categoria: 'Hortifruti',     precoVenda: 2.50,  quantidade: 60,  unidade: 'un' },
    { id: 7,  nome: 'Coca-Cola 2L',         categoria: 'Bebidas',        precoVenda: 9.90,  quantidade: 90,  unidade: 'un' },
    { id: 8,  nome: 'Suco de Laranja',      categoria: 'Bebidas',        precoVenda: 6.50,  quantidade: 70,  unidade: 'L'  },
    { id: 9,  nome: 'Pão Francês',          categoria: 'Padaria',        precoVenda: 0.75,  quantidade: 300, unidade: 'un' },
    { id: 10, nome: 'Bolo de Chocolate',    categoria: 'Padaria',        precoVenda: 25.00, quantidade: 15,  unidade: 'un' },
    { id: 11, nome: 'Presunto',             categoria: 'Frios',          precoVenda: 29.90, quantidade: 40,  unidade: 'kg' },
    { id: 12, nome: 'Mortadela',            categoria: 'Frios',          precoVenda: 18.90, quantidade: 35,  unidade: 'kg' },
    { id: 13, nome: 'Arroz 5kg',            categoria: 'Mercearia',      precoVenda: 24.90, quantidade: 100, unidade: 'pct'},
    { id: 14, nome: 'Feijão Preto 1kg',     categoria: 'Mercearia',      precoVenda: 8.90,  quantidade: 80,  unidade: 'pct'},
    { id: 15, nome: 'Detergente',           categoria: 'Limpeza',        precoVenda: 2.50,  quantidade: 110, unidade: 'un' },
    { id: 16, nome: 'Sabão em Pó 1kg',      categoria: 'Limpeza',        precoVenda: 12.90, quantidade: 60,  unidade: 'pct'},
    { id: 17, nome: 'Shampoo',              categoria: 'Higiene Pessoal', precoVenda: 14.90, quantidade: 55,  unidade: 'un' },
    { id: 18, nome: 'Creme Dental',         categoria: 'Higiene Pessoal', precoVenda: 5.90,  quantidade: 75,  unidade: 'un' }
  ];

  produtoSelecionado: Produto | null = null;

  cadastrar(prod: Omit<Produto, 'id'>) {
    this.produtos.push({
      id: this.produtos.length + 1,
      ...prod
    });
  }
}