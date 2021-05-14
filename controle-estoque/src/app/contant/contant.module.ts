import { MenuComponent } from './../menu/menu.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContantRoutingModule } from './contant-routing.module';
import { ContantComponent } from './contant.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProdutoComponent } from './produto/produto.component';



@NgModule({
  declarations: [
    ContantComponent,
    EmpresaComponent,
    ProdutoComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ContantRoutingModule,    
  ]
})
export class ContantModule { }
