import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password
      ).then(
        (success) => {
        this.router.navigate(['/hello']);
      }).catch(
        (err) => {
        this.error = err;
      });
    }
  }

}
