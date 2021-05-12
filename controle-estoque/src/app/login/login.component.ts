import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  profileForm = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }

}
