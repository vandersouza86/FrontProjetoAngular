import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  callPage(param) {
    

    if(param === "empresa"){
      console.warn("empresa: ", param);
    }else{
      console.warn("produto: ", param);
    }
  }

}
