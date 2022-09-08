import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  flag:any=true;
  bcolor:any
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
  login(){
    this.flag=true;
  }
  register(){
    this.flag=false;
  }

}
