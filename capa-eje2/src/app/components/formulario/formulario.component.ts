import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output('agregar') agregarEvent : EventEmitter<string> = new EventEmitter<string>();
  @Output('cancelar') cancelarEvent : EventEmitter<any> = new EventEmitter<any>();
  public texto : string = '';
  public isValid : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  agregar() {
    this.agregarEvent.emit(this.texto);
    this.texto = '';
  }

  enter(e:any) {
    if(e.keyCode == 13) {
      this.agregar();
    }
  }

  cancelar() {
    this.texto = '';
    this.cancelarEvent.emit();
  }

  formatMessage(texto : string) : any {
    return 1;
  }

}
