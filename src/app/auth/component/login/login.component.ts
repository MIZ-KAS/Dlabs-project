import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild ('f') addForm = NgForm;
  // addForm: FormGroup;

  user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addForm);
    this.user = Object.assign(this.user, this.addForm);
    localStorage.setItem('Users', this.user);
    // localStorage.setItem('Users', JSON.stringify(this.user));
    // console.log(f.value)
    // console.log(f);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    // let users = this.f.value;
    // localStorage.setItem('user', f.value);
  }

  // converting to string
  // Json.stringify(user)

}
