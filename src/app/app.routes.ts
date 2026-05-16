import { Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'alterar', component: AlterarComponent }
  // adiciona depois:
  // { path: 'apagar', component: ApagarComponent },
];