import { Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';import { CadastrarProdutoComponent } from './pages/produtos/cadastrar-produto/cadastrar-produto.component';
import { ConsultarProdutoComponent } from './pages/produtos/consultar-produto/consultar-produto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'alterar', component: AlterarComponent },
  { path: 'apagar', component: ExcluirComponent },
  { path: 'produtos/cadastrar', component: CadastrarProdutoComponent },
{ path: 'produtos/consultar', component: ConsultarProdutoComponent }
];