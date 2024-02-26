import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {LoggedUser} from "../../models/logged-user-binding-model";
import {FormControl, FormGroup} from "@angular/forms";
import {PasswordBindingModel} from "../../models/password-binding-model";
import {UserDataBindingModel} from "../../models/user-data-binding-model";

@Component({
  selector: 'app-my-account-card',
  templateUrl: './my-account-card.component.html',
  styleUrls: ['./my-account-card.component.css']
})
export class MyAccountCardComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  loggedUser: LoggedUser = {} as LoggedUser;

  userDetailsFormGroup!: FormGroup;

  passwordModel: PasswordBindingModel = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }

  userDataModel: UserDataBindingModel = {
    mobilePhone: '',
    nickname: '',
    gender: '',
    birthDate: '',
    email: '',
  }

  ngOnInit(): void {
    this.createUserDetailsFormGroup();
    this.loggedUser = this.userService.loggedUser;
  }

  createUserDetailsFormGroup() {
    this.userDetailsFormGroup = new FormGroup<any>({
      email: new FormControl('', []),
      username: new FormControl('', []),
      birthDate: new FormControl('', []),
      gender: new FormControl('', []),
      addresses: new FormControl('', []),
      mobilePhone: new FormControl('', []),
      password: new FormControl('', []),
      newPassword: new FormControl('', []),
      confirmNewPassword: new FormControl('', []),
    })
  }

  changePassword(password: PasswordBindingModel) {
    this.userService._changeUserPassword(password);
  }

  changeUserData(userData: UserDataBindingModel) {
    this.userService._editUserData(userData);
  }

  subscribe() {
    this.userService._subscribe();
  }

  unsubscribe() {
    this.userService._unsubscribe();
  }

}
