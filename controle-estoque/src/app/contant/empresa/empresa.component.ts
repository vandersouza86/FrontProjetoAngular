import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from './empresa-model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private router: Router) { }

  model =  new EmpresaModel(0, '', '','','','','','',0);

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.model);
    this.router.navigate(['/home']);
  }

}
