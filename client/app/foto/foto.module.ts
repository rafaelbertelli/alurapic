import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
	declarations: [ FotoComponent, FiltroPorTitulo ], // declara tudo que faz parte deste modulo
	exports: [ FotoComponent, FiltroPorTitulo ] // declaro o que o modulo pertime que os outros utilizem
})
export class FotoModule { }