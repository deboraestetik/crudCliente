import { Data } from "@angular/router";

export class Cliente {

  id?: number;
  nome?: string;
  cpf?: string;
  endereco?: string;
  telefone?: string;
  sexo?: string;

  cliente?: Cliente;

  clientes(data: Cliente){

    this.cliente = data;
  }
  constructor(nome: string, cpf: string, endereco: string, telefone: string, sexo: string){

    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.sexo = sexo;
  }

}


