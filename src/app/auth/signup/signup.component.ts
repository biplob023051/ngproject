import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	genders = ['male', 'female'];
	signUpForm: FormGroup;
	forbiddenUserNames = ['Admin', 'Owner'];
  constructor() { }
  ngOnInit() {
  	this.signUpForm = new FormGroup({
  		'name': new FormGroup({
  			'fname': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
  			'lname': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)])
  		}),
  		'email': new FormControl(null, [Validators.required, Validators.email]),
  		'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
  		'gender': new FormControl('male'),
  		'hobbies': new FormArray([
  			new FormControl(null, Validators.required),
  			new FormControl(null, Validators.required)
  		])
  	});
  }

  addMoreHobbies() {
  	let control = new FormControl(null, Validators.required);
  	(<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenName(control: FormControl) : {[s:string] : boolean} {
  	if (this.forbiddenUserNames.indexOf(control.value) != -1) {
  		return {'forbiddenNames': true};
  	}
  }

  onSignup() {
  	console.log(this.signUpForm);
  }

}
