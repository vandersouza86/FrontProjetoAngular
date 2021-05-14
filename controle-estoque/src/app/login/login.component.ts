import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  onSubmit() {
    
  }

  login(){
    this.router.navigate(['/home']);
  }

}
