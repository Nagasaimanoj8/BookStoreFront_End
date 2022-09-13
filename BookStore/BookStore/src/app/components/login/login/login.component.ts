import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  flag:any=true;
  bcolor:any
  constructor(private formBuilder: FormBuilder, private user: UserService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("valid data", this.loginForm.value);
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password

      }
      this.user.signin(data).subscribe((res: any) => {
        console.log("token", res)
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('/dashboard/getallbooks');

      })
    } else {
      console.log("invalid data", this.loginForm.value);
    }

  }

  login(){
    this.flag=true;
  }
  register(){
    this.flag=false;
  }

}
