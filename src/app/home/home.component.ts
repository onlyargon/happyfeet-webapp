import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  viewMoreAbout(){
    this._route.navigate(['about']);
  }

  gotoDesign(){
    this._route.navigate(['design']);
  }

  gotoContact(){
    this._route.navigate(['contact']);
  }

  findStore(){

  }

  myOrders(){

  }

}
