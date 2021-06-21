import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ContantModule } from './contant/contant.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistroComponent,
    
  ],
  imports: [
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ContantModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
