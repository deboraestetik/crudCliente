import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';
import { CriarClienteComponent } from './cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
      ClienteComponent,
      ListaClientesComponent,
      DetalheClienteComponent,
      CriarClienteComponent,
      EditarClienteComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
