import { DadosRota } from './../model/dados-rota.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  valueEmpresa:string = "Empresa";
  valueProduto:string = "Produto";
  dadosRotaEmpresa:DadosRota[] = [{nome:"Cadastrar Empresa", router:"./empresa"}, {nome:"Listar Empresa", router:"./empresa"}];
  dadosRotaProduto:DadosRota[] = [{nome:"Cadastrar Produto", router:"./produto"}, {nome:"Listar Produto", router:"./produto"}];



  constructor() { }

  ngOnInit(): void {
  }

}
