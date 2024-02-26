import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ForgottenPasswordBindingModel} from "../../models/forgotten-password-binding-model";

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  forgottenPasswordModel: ForgottenPasswordBindingModel = {
    email: ''
  }
  passwordFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createPasswordGroup();
  }

  editPassword(email: ForgottenPasswordBindingModel) {
    this.userService._changePassword(email);
  }

  createPasswordGroup() {
    this.passwordFormGroup = new FormGroup<any>({
      email: new FormControl('', [Validators.required]),
    })
  }

}
