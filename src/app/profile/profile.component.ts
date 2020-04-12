import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  loggedUser = 'there!';
  subHeaidng = ""
  user = {} as any;
  constructor(private _service: ProfileService) {
    this.user = {
      address : {} as any,
      basicInfo : {} as any
    }
  }

  ngOnInit(): void {
    var uName =  localStorage.getItem("userName");
    this.loggedUser = uName;
    this.getUserProfile();
  }

  getUserProfile(){
    var obj = {
      userId : localStorage.getItem("userId")
    }

    this._service.getUserProfile(obj).subscribe((data:any)=>{
      if(data){
        this.user = data.Data
      }
    });

  }

  saveProfile(){

    if(this.user.basicInfo.id){

      this._service.updateProfile(this.user).subscribe((data:any)=> {
        console.log(data);
      });
    } else {
      this._service.saveProfile(this.user).subscribe((data:any)=>{
        console.log(data);
      });
    }
  }

  goback(){
    window.history.back();
  }

}
