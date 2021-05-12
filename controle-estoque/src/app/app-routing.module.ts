import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContantComponent } from './contant/contant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [  
  { path: 'conteudo', component: ContantComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
