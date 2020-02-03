import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { dataJson, signUpJson } from '../arrayTemp';


@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  user='';
  slct:boolean;
  id:number;
  
  constructor() { }

  ngOnInit() {
    this.id=dataJson.length-1;
    console.log(this.id);
    console.log(signUpJson);
    this.user=dataJson[this.id].email;

    if(dataJson[this.id].type=="mobile")
    {
      this.slct=true;
    }
    else
    {
      this.slct=false;
    }
    
  }


  mobileArray=[{
    name:'Movies',
    img:'../../assets/mobile/mob1.png',
    desc:'At Rs 6497'
  },
  {
    name:'Train',
    img:'../../assets/mobile/mob2.png',
    desc:'At Rs 15510'
  },
  {
    name:'Bus',
    img:'../../assets/mobile/mob3.png',
    desc:'At Rs 14099'
  },
  {
    name:'flights',
    img:'../../assets/mobile/mob4.png',
    desc:'At Rs 12988 '
  },
  {
    name:'Shop',
    img:'../../assets/mobile/mob5.png',
    desc:'At Rs 6780'
  },
  {
    name:'Hot-Deals',
    img:'../../assets/mobile/mob6.png',
    desc:'At Rs 8720'
  

  }];

  fashionArray=[{
    name:'Prepaid Bill',
    img:'../../assets/fashion/f1.png',
    desc:'Upto 50% off'
  },
  {
    name:'Postpaid Bill',
    img:'../../assets/fashion/f2.png',
    desc:'Min 40% off'
  },
  {
    name:'Electricity',
    img:'../../assets/fashion/f3.png',
    desc:'Min 50% off'
  },
  {
    name:'Metro',
    img:'../../assets/fashion/f4.png',
    desc:'Min 10% cashback'
  },
  {
    name:'Landline',
    img:'../../assets/fashion/f5.png',
    desc:'Under rs 999'
  },
  {
    name:'BroadBand',
    img:'../../assets/fashion/f6.png',
    desc:'40% - 70% off'
  }];

}
