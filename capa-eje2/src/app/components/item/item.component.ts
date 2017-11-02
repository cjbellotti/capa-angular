import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	@Input('datos') public elemento : string;
	@Output('borrar') public borrarEvent : EventEmitter<string> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  borrar() {
  	this.borrarEvent.emit(this.elemento);
  }
}
