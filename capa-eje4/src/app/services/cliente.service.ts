import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http } from '@angular/http';

import { Cliente } from '../models/Cliente';

@Injectable()
export class ClienteService {

  public nuevoClienteSource = new Subject<Array<Cliente>>();
  public nuevoClienteEvent = this.nuevoClienteSource.asObservable();

  private _cliente : Array<Cliente>;

  constructor(
    private _http : Http
  ) {
    this._cliente = new Array<Cliente>();
  }

  getAll() {
    return this._http.get('http://localhost:3000/cliente');
    //return Promise.resolve(this._cliente.map(item => item));
  }

  getById(id : number ) : Promise<Cliente> {
    return Promise.resolve(this._cliente.find(item => item.id == id));
  }

  // create(cliente : Cliente) : Promise<Cliente> {
  //   this._cliente.push(cliente);
  //   this.nuevoClienteSource.next(this._cliente.map(item => item));
  //   return Promise.resolve(cliente);
  // }

  create(cliente : Cliente) : Promise<Cliente> {
    return this._http.post('http://localhost:3000/cliente',
                      cliente).toPromise()
            .then(response => {
              this.nuevoClienteSource.next(this._cliente);
              return Promise.resolve(response);
            });
  }
}
