import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  clienteURL = "http://localhost:8080/clientes";


  constructor(private httpClient: HttpClient) {
  }
    public getClientes(): Observable<Cliente[]>{
      return this.httpClient.get<Cliente[]>(this.clienteURL + "");
    }
    public getClienteById(id: number): Observable<Cliente>{
      return this.httpClient.get<Cliente>(this.clienteURL + `/${id}`);
    }
    public postCliente(cliente: Cliente): Observable<Cliente[]> {
      return this.httpClient.post<any[]>(this.clienteURL, cliente);
    }
    public putCliente(cliente: Cliente): Observable<Cliente> {
      return this.httpClient.put<Cliente>(this.clienteURL, cliente);
    }
    public deleteCliente(id: number): Observable<Cliente> {
      return this.httpClient.delete<Cliente>(this.clienteURL + `/${id}`);
    }

}
