import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { dataJson,signUpJson } from '../arrayTemp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id=1;

  signupFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.signupFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      type1:['']
    })
  }

  onSubmit() {
    this.id = signUpJson.length + 1;
    signUpJson.push({
      id: this.id,
      'email': this.signupFormGroup.controls.email.value,
      'pwd': this.signupFormGroup.controls.pwd.value,
      'type': this.signupFormGroup.controls.type1.value
    });
    this.router.navigateByUrl('/login');
  }

}
