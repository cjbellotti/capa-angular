import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector : 'formulario',
  templateUrl :'./formulario.component.html',
  styleUrls : [ './formulario.component.css']
})

export class FormularioComponent {

  constructor(
    private _clienteService : ClienteService
  ) {}

  onSubmit(formulario : any) {
    console.log(formulario);
    this._clienteService.create(formulario.form._value)
      .then((result) => formulario.reset());
  }
}
