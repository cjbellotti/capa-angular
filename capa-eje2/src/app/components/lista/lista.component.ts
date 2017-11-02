import { Component } from '@angular/core';

@Component({
	selector : 'lista',
	templateUrl : './lista.component.html',
	styleUrls : [ './lista.component.css']
})

export class ListaComponent {

	public datos : Array<string>;
	public nuevo : boolean = false;
	
	constructor() {

	}

	ngOnInit() {

		this.datos = [];

	}

	agregar(texto : string) {
		this.datos.push(texto);
		this.nuevo=false;
	}

	borrar(item : string) {
		//this.datos = this.datos.filter(i => i != item);
		this.datos = this.datos.filter(function(i) {
			return i != item;
		});
	}

	switchNuevo() {
		this.nuevo = true;
	}

	cancelar() {
		this.nuevo = false;
	}
}