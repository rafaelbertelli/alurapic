import { Component } from '@angular/core';

@Component({ // cria um componente do angular
	moduleId: module.id, // faz com que o templateUrl busque o caminho da propria pasta relativa
	selector: 'app', // definicao de nome do seletor no html
	templateUrl: './app.component.html' // sem o moduleId, devo declarar o caminho absoluto ./app/app.component.html
})
export class AppComponent { 

}