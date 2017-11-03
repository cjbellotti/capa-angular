import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector : 'lista',
  templateUrl :'./lista.component.html',
  styleUrls : [ './lista.component.css']
})

export class ListaComponent {

  public clientes : Array<Cliente> = new Array<Cliente>();

  constructor(
    private _clienteService : ClienteService
  ) {}

  ngOnInit() {
    this._clienteService.nuevoClienteEvent.subscribe((clientes) => {
      this._clienteService.getAll()
        .subscribe((response) => this.clientes = response.json());
    });
    this._clienteService.getAll()
      .subscribe((response) => this.clientes = response.json());
  }
}
