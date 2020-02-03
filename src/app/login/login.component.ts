import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dataJson, signUpJson } from '../arrayTemp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }

  loginFormGroup: FormGroup;

  ngOnInit() {
    this.loginFormGroup = this.formbuilder.group({
      email: [''],
      pwd: [''],
      type: ['']
    })

  }
  t=0;

  onLogin() {
    console.log(this.loginFormGroup.value);
    for (let i = 0; i < signUpJson.length; i++) {
      if (this.loginFormGroup.controls.email.value == signUpJson[i].email && this.loginFormGroup.controls.pwd.value == signUpJson[i].pwd) {
        dataJson.push({
          id: i,
          'email': this.loginFormGroup.controls.email.value,
          'pwd': this.loginFormGroup.controls.pwd.value,
          'type': signUpJson[i].type
        });
        console.log(signUpJson);
        this.router.navigateByUrl('/after');
        this.t=1;
        break;

      }


    }
    if(this.t==0)
    {
      alert('Invalid email and password');
    }
  }


}
