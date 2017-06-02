import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { CapitalizePipe } from './capitalize.pipe';
@NgModule({
	declarations: [
		DropdownDirective,
		CapitalizePipe
	],
	exports: [
		CommonModule,
		DropdownDirective,
		CapitalizePipe
	]
})
export class SharedModule {

}