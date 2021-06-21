import { DadosRota } from './../../model/dados-rota.model';
import { ElementRef, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  
  @ViewChild("cards") cardComponent: ElementRef;

  @Input()
  router:string = '';

  @Input()
  valueFront:string = '';
  @Input()
  valueBackList:DadosRota[] = [];

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

  }

  
 
  changeAttributesAdd(){
    this.renderer.addClass( this.cardComponent.nativeElement, 'change-card');
  }

  changeAttributesRemove(){
    this.renderer.removeClass( this.cardComponent.nativeElement, 'change-card');
  }


}
