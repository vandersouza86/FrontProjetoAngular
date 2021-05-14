import { Router } from '@angular/router';
import { ProdutoModel } from './produto-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  model = new ProdutoModel(0, '', '', '');

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.model);
    this.router.navigate(['/home']);
  }


}
