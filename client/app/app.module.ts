import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

@NgModule({ // transforma a classe num modulo do angular
	imports: [ BrowserModule, FotoModule, HttpModule ], // Sao os modulos que meu app.component importa para usar. Sobre o BrowserModule, como roda no navegador, importo o BrowserModule, se fosse no Ionic, seria outro 
	declarations: [ AppComponent ], // declara o que faz parte deste modulo, neste caso, AppComponent
	bootstrap: [ AppComponent ] // diz qual o componente que dever ser primeiro iniciado
})
export class AppModule { }