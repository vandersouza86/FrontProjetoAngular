import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const produtoRoutes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto-list', component: ListaProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(produtoRoutes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
