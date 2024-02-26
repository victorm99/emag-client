import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {UserBindingModel} from "../../models/user-binding-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  registerForm!: FormGroup;

  userModel: UserBindingModel = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  register(userDetails: UserBindingModel) {
    this.userService._register(userDetails);
  }

  createRegisterForm() {
    this.registerForm = new FormGroup<any>({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

}
