import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component'

@Component({
	moduleId: module.id,
	selector: 'cadastro',
	templateUrl: './cadastro.component.html'
})
export class CadastroComponent { 

	foto: FotoComponent = new FotoComponent();

	constructor() {
		this.foto.descricao = 'A';
		this.foto.titulo = 'B';
		this.foto.url = 'c';
	}

	cadastrar(event) {
		event.preventDefault();

		console.log(this.foto);
		
	}

}