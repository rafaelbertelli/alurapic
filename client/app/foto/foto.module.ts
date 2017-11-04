import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
	declarations: [ FotoComponent ], // declara tudo que faz parte deste modulo
	exports: [ FotoComponent ] // declaro o que o modulo pertime que os outros utilizem
})
export class FotoModule { }