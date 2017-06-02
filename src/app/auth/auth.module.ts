import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		SignupComponent,
    	SigninComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		AuthRoutingModule,
		SharedModule
	]
})
export class AuthModule{}