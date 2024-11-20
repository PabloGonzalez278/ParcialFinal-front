import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';
import { ListarContratosComponent } from './components/listar-contratos/listar-contratos.component';

const routes: Routes = [
  { path: 'crear', component: CrearContratoComponent },
  { path: 'listar', component: ListarContratosComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
