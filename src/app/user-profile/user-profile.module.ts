import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {ForgottenPasswordComponent} from './forgotten-password/forgotten-password.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {LayoutModule} from "../layout/layout.module";
import {MyAccountCardComponent} from './my-account/my-account-card.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    ForgottenPasswordComponent,
    MyAccountComponent,
    MyAccountCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatSelectModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class UserProfileModule {
}
