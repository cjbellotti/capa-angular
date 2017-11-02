import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { ItemComponent } from './components/item/item.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
