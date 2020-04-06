import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedUser = 'Hello there';
  user = {} as any;
  constructor() {
    this.user = {
      address : {} as any,
      basicInfo : {} as any
    }
  }

  ngOnInit(): void {
  }

}
