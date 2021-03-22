import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  nome = '';
  cpf = '';
  endereco = '';
  telefone = '';
  sexo = '';
  id?: number;

  cliente?: Cliente;

  constructor(
    private route: Router,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,

    ) {

   }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.getClienteById(id).subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        this.toastr.error("Error", "Falha" ,{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.route.navigate(['/']);
      }
    );
    }


  updateCliente(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.getClienteById(id).subscribe(
      data => {
        this.cliente = data;
        this.clienteService.putCliente(id, this.cliente).subscribe(
          data => {
            this.toastr.success("Cliente alterado com sucesso", "Ok",{
            timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.route.navigate(['/']);
          },
          err => {
            this.toastr.error("Error ao alterar cliente", "Falha" ,{
            timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.route.navigate(['/']);
          }

        );
      },
      err => {
        this.toastr.error("Error", "Falha" ,{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.route.navigate(['/']);
      }
    );

  }
}


