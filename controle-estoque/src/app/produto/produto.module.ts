import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoComponent } from './produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';


@NgModule({
  declarations: [
    ProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
