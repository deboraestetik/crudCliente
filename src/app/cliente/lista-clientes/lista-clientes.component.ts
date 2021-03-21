import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.listaClientes();

  }

  listaClientes(): void {
    this.clienteService.getClientes().subscribe(
      data => {
        this.clientes = data;
      },
      err =>{
        console.log(err);
      }
    );
  }
}
