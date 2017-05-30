import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	@ViewChild('f') loginForm: NgForm;
  constructor() { }

  ngOnInit() {
  }


  onLogin(){
  	console.log(this.loginForm);
  }

}
