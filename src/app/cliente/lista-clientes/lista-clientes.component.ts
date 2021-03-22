import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
    ) { }

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

  deletar(id?: number) {
    this.clienteService.deleteCliente(id).subscribe(
      data => {
        this.toastr.success("Cliente excluido com sucesso", "Ok",{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.listaClientes();
      },
      err => {
        this.toastr.error("Error ao excluir cliente", "Falha" ,{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
      }

    )
  }
}
