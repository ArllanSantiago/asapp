import { Output } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
 /* styleUrls: ['./app.component.sass']*/
})
export class AppComponent {   

  systemDetail = {
    title:"AS-Solution"
    ,version:"1.0.0"
    ,logo:"assets/AdminLTELogo.png"
    ,router:"index3.html"
  }  
  userProfile ={
    name:"Arllan Felipe"
    ,photo:"assets/user1-160x160.jpg"
  }
}