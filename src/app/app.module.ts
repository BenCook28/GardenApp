import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { FirebaseService } from './services/auth.service';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCITF5P0jG-DokP636CZqQj0e3HpYIF3s0",
    authDomain: "janies-garden-app.firebaseapp.com",
    databaseURL: "https://janies-garden-app.firebaseio.com",
    projectId: "janies-garden-app",
    storageBucket: "",
    messagingSenderId: "337108773371"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'signin',
         component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ])
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }