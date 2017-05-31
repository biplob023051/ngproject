import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CapitalizePipe } from '../shared/capitalize.pipe';

@NgModule({
	declarations: [
		SignupComponent,
    	SigninComponent,
    	CapitalizePipe
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		AuthRoutingModule,
	]
})
export class AuthModule{}