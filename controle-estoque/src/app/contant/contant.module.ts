import { CardComponent } from './../component/card/card.component';
import { MenuComponent } from './../menu/menu.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 



import { ContantRoutingModule } from './contant-routing.module';
import { ContantComponent } from './contant.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProdutoComponent } from './produto/produto.component';




@NgModule({
  declarations: [
    CardComponent,
    ContantComponent,
    EmpresaComponent,
    ProdutoComponent,
    MenuComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,    
    FormsModule,
    ContantRoutingModule,    
  ]
})
export class ContantModule { }
