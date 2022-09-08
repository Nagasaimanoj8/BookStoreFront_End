import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'Password': ['', [Validators.required, Validators.minLength(8)]],
      'phoneNo': ['', [Validators.required, Validators.maxLength(10)]],
      'role':['',[Validators.required,Validators.maxLength(10)]]

    })
  }
  onSubmit() {
    this.submitted = true;
      if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data = {
          first_name: this.registerForm.value.firstname,
          last_name: this.registerForm.value.firstname,
          role:this.registerForm.value.role,
           email: this.registerForm.value.email,
          password: this.registerForm.value.Password,
          phone_no: this.registerForm.value.phoneNo,
        }
        this.user.register(data).subscribe((res: any) => {
          console.log("register response", res);
        })
      }
      else {

        console.log("Invalid data", this.registerForm.value);
      }

    }
  }


