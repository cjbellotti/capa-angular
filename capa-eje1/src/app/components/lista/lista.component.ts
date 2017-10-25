import { Component } from '@angular/core';

@Component({
	selector : 'lista',
	templateUrl : './lista.component.html',
	styleUrls : [ './lista.component.css']
})

export class ListaComponent {

	public datos : Array<string>;
	
	constructor() {

	}

	ngOnInit() {

		this.datos = [ 
				"Elemento 1",
				"Elemento 2",
				"Elemento 3"
		];

	}

	agregar() {
		this.datos.push("Elemento " + (this.datos.length + 1));
	}

	borrar(item : string) {
		//this.datos = this.datos.filter(i => i != item);
		this.datos = this.datos.filter(function(i) {
			return i != item;
		});
	}
}