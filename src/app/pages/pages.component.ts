import { Component, Input, OnInit } from '@angular/core';
import { Menu, MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {

  constructor() { }
  @Input() userProfile= {
    name:"Arllan Felipe"
    ,photo:"assets/user1-160x160.jpg"
  }
  @Input() systemDetail={
    title:"AS-Solution"
    ,version:"1.0.0"
    ,logo:"assets/AdminLTELogo.png"
    ,router:"index3.html"
  }  
  menu:Menu[] = MENU_ITEMS;

  ngOnInit(): void {    
    this.menu= MENU_ITEMS;
    console.log(this.menu)
  }

}
