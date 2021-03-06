import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginWithEmailComponent } from './components/login-with-email/login-with-email.component';
import { AuthenticationDefaultComponent } from './components/authentication-default/authentication-default.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRegistrationComponent } from './components/app-registration/app-registration.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    LoginWithEmailComponent,
    AuthenticationDefaultComponent,
    AppRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule
  ]
})
export class AuthenticationModule {
}
