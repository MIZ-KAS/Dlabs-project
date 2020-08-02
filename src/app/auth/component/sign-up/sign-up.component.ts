import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerationForm: FormGroup;
  // user: any = {};
  user: User;
  userSubmitted: boolean;


  constructor( private fb: FormBuilder, private AuthService: AuthService) { }

  ngOnInit() {

    // this.registerationForm = new FormGroup({
    //   aName: new FormControl(null, Validators.required),
    //   afName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(9)]),
    // });
    this.createRegistrationForm();
  }

  // FormBuilder to min the code, easy to build reactive forms

  createRegistrationForm() {
    this.registerationForm = this.fb.group({
      aName: [null, Validators.required],
      afName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(9)]]
    })
  }

userData(): User {
  return this.user = {
    aName: this.aName.value,
    afName: this.afName.value,
    email: this.email.value,
    password: this.password.value
  }
}

  // get methonds for all Form controls
  get aName() {
    return this.registerationForm.get('aName') as FormControl;
  }

  get afName() {
    return this.registerationForm.get('afName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  onSubmit(){
    console.log(this.registerationForm);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      // this.addUser(this.user);
      this.AuthService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      // localStorage.setItem('Users details', JSON.stringify(this.user));
  }
  }
  // adding multiple users by creating a method with and Array
  // addUser(user) {
  //   let users = [];
  //   if (localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   }else {
  //     users = [user];
  //   }
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }
}
