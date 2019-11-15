import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyBaZQdO7HBTsoaUku8Uku69a-jGbKLVUaY',
  authDomain: 'heroes-22bde.firebaseapp.com',
  databaseURL: 'heroes-22bde.firebaseio.com',
  storageBucket: 'heroes-22bde.appspot.com',
  messagingSenderId: '524809389284',
  appId: '1:524809389284:web:67e5cd7d1a16fb2119d8f1',
  measurementId: 'G-DRGLGC0R51'
};



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    LoginRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule
  ],
  providers: [AngularFireAuth]
})
export class LoginModule { }
