import { Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'consultar', component: ConsultarComponent },
  // adiciona depois:
  // { path: 'editar', component: EditarComponent },
  // { path: 'apagar', component: ApagarComponent },
];