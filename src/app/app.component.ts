import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { dataJson, signUpJson } from './arrayTemp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'somethingNew';
 
  user="You must login";
  len=dataJson.length;
  ngOnInit(){ 
    
    
  }
  ngDoCheck(){
    console.log("here");
    if(this.len>1)
    {
      console.log("here");
      console.log(this.len);
      this.user=dataJson[this.len-1].email;
    }
  }

}
