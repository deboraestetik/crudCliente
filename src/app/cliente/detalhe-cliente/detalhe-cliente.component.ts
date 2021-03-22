import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  cliente?: Cliente;

  clientes: Cliente[] = [];

  constructor(
    private route: Router,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.getClienteById(id).subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        this.toastr.error("Error ao detalhar cliente", "Falha" ,{
          timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.route.navigate(['/']);
      }
    )
  }

  detalhar(): void {
    this.route.navigate(['/']);
  }

  voltar(): void {
    this.clienteService.getClientes();
}
}
