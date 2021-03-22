import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  nome = '';
  cpf = '';
  endereco = '';
  telefone = '';
  sexo = '';

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
     ) { }

  ngOnInit(): void {
  }

  criarCliente(): void {
    const cliente = new Cliente(this.nome,this.cpf,this.endereco,this.telefone,this.sexo);
    this.clienteService.postCliente(cliente).subscribe(
      data => {
        this.toastr.success("Cliente criado com sucesso", "Ok",{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error("Error ao cadastrar cliente", "Falha" ,{
        timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }

    );

  }

}
