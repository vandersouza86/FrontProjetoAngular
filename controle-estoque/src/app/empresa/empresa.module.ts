import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaEmpresaComponent } from './lista-empresa/lista-empresa.component';
import { EmpresaComponent } from './empresa.component';

@NgModule({
  declarations: [
    EmpresaComponent,
    ListaEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
