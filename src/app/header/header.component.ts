import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser = 'Hello there';
  constructor(private auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.auth.signOut();
  }

  gotoProfile(){
    if(JSON.parse(localStorage.getItem('userType')) == "Customer"){
      this._router.navigate(['profile']);
    }else{
      this._router.navigate(['com-profile']);
    }
  }

}
