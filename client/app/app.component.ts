import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({ // cria um componente do angular
	moduleId: module.id, // faz com que o templateUrl busque o caminho da propria pasta relativa
	selector: 'app', // definicao de nome do seletor no html
	templateUrl: './app.component.html' // sem o moduleId, devo declarar o caminho absoluto ./app/app.component.html
})
export class AppComponent { 

	fotos: Object[] = [];
	
	constructor(http: Http) {

		http
			.get('v1/fotos')
			.map( res => res.json() )
			.subscribe( 
				fotos => this.fotos = fotos,
				error => console.log(error)
			)
	}

}