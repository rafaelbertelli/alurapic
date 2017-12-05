import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component' // Chamei o component ao invez do module pq soh vou usar o cadastro na pagina da app exclusivamente, nao vou usar em outros pontos, ou seja, ele nao tem o modulo cadastro.module, pois ele faz parte apenenas do app.module
import { ListagemComponent } from './listagem/listagem.component'
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({ // transforma a classe num modulo do angular
	imports: [ // Sao os modulos que meu app.component importa para usar. Sobre o BrowserModule, como roda no navegador, importo o BrowserModule, se fosse no Ionic, seria outro 
		BrowserModule, 
		FotoModule, 
		HttpModule, 
		PainelModule, 
		routing,
		FormsModule,
		ReactiveFormsModule
	], 
	declarations: [ // declara o que faz parte deste modulo, neste caso, AppComponent e o CadastroComponent, pois sao componentes exclusivos deste modulo
		AppComponent, 
		CadastroComponent, 
		ListagemComponent 
	],
	bootstrap: [ // diz qual o componente que dever ser primeiro iniciado
		AppComponent 
	] 
})
export class AppModule { }