import { Injectable } from '@angular/core';
import { UserBindingModel } from '../models/user-binding-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { SnackbarService } from './SnackbarService';
import { ForgottenPasswordBindingModel } from '../models/forgotten-password-binding-model';
import { LoginBindingModel } from '../models/login-binding-model';
import { PasswordBindingModel } from '../models/password-binding-model';
import { LoggedUser } from '../models/logged-user-binding-model';
import { UserDataBindingModel } from '../models/user-data-binding-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private snackbarService: SnackbarService,
    private router: Router,
    private http: HttpClient
  ) {}

  loggedUser: any;
  isLogged: boolean = false;

  isSubscribed: boolean = false;


  _isAdmin(): boolean {
    return this.loggedUser?.admin && this.isLogged;
  }

  _register(userDetails: UserBindingModel) {
    this.http.post(environment.baseUrl + '/users', userDetails).subscribe(
      (result) => {
        this.router.navigate(['/home']).then((r) => {});
      },
      // (error) => {
      //   this.snackbarService.openErrorSnackbar(
      //     // @ts-ignore
      //     Object.values(error.error)[0].toString(),
      //     'error'
      //   );
      // }
    );
  }

  _changePassword(email: ForgottenPasswordBindingModel) {
    return this.http
      .put(environment.baseUrl + '/users/forgotten-pass', email)
      .subscribe(
        (result) => {},
        // (error) => {
        //   this.snackbarService.openErrorSnackbar(
        //     // @ts-ignore
        //     Object.values(error.error)[0].toString(),
        //     'error'
        //   );
        // }
      );
  }

  _login(userDetails: LoginBindingModel) {
    return this.http
      .post(environment.baseUrl + '/users/login', userDetails)
      .subscribe(
        (result) => {
          this.router.navigate(['/home']).then((r) => {});
          this.loggedUser = result;
          this.isLogged = true;
        }
      );
  }

  _logout() {
    return this.http
      .post(environment.baseUrl + '/users/logout', {})
      .subscribe((result) => {
        this.router.navigate(['/home']).then((r) => {});
        this.loggedUser = {};
      });
  }

  _changeUserPassword(password: PasswordBindingModel) {
    return this.http
      .put(
        environment.baseUrl + '/users/' + this.loggedUser.id + '/pass',
        password
      )
      .subscribe();
  }

  _editUserData(userData: UserDataBindingModel) {
    return this.http
      .put(environment.baseUrl + '/users/' + this.loggedUser.id, userData)
      .subscribe();
  }

  _subscribe() {
    return this.http.post(environment.baseUrl + "/users/subscribe", {})
      .subscribe(result => {
        this.isSubscribed = true;
      });
  }

  _unsubscribe() {
    return this.http.post(environment.baseUrl + "/users/unsubscribe", {})
      .subscribe(result => {
        this.isSubscribed = false;
      });
  }
}
