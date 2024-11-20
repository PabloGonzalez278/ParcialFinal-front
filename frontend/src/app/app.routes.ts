import { Routes } from '@angular/router';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';
import { ListarContratosComponent } from './components/listar-contratos/listar-contratos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'crear', component: CrearContratoComponent },
  { path: 'listar', component: ListarContratosComponent },
];
