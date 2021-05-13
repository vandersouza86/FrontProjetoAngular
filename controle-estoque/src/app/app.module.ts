import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ContantComponent } from './contant/contant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoModule } from './produto/produto.module';
import { EmpresaModule } from './empresa/empresa.module';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    MenuComponent,
    ContantComponent,
    PageNotFoundComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    EmpresaModule,
    ProdutoModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
