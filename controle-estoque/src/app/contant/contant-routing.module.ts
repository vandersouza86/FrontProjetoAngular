import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContantComponent } from './contant.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: 'home', component: ContantComponent,
    children: [
      { path: 'produto', component:ProdutoComponent},
      { path: 'empresa', component:EmpresaComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContantRoutingModule { }
