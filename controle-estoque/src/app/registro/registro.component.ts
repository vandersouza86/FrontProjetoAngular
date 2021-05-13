import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Registro('', '', '', '','');
  submitted = false; 

  onSubmit() { this.submitted = true; 
  console.log(this.model);
  }

}
