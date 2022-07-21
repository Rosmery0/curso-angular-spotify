import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rosmery Rosario';
  txtname = "Type your name here!!!";
  disabled = true;
  img = "https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430"
  
  text = "This is a event binding example";
  text2:string = "";
  constructor(){
    setInterval(() => this.disabled=false, 3000);

  }

  getSum(num1:number, num2:number){
    return num1 + num2;
  }

  changeText(): void{
    this.text = "The text has changed!!!";
  }
}
