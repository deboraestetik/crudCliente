import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarClienteComponent } from './cliente/criar-cliente/criar-cliente.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';

const routes: Routes = [
  {path: '', component: ListaClientesComponent},
  {path: 'detalhe/:id', component: DetalheClienteComponent},
  {path: 'criar', component: CriarClienteComponent},
  {path: 'editar/:id', component: EditarClienteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
