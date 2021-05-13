import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  model = new Registro('', '', '', '','');
  submitted = false; 

  onSubmit() { 
  console.log(this.model);
  this.router.navigate(['/login']);
  }

}
