import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  loggedUser = 'there!';
  subHeaidng = ""
  user = {} as any;
  constructor(private _service: ProfileService, private _ts:ToastrService) {
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
        if (data.Code == 0) {
          this._ts.success(data.Message);
        } else {
          this._ts.error(data.Message);
        }
      });
    } else {
      this._service.saveProfile(this.user).subscribe((data:any)=>{
        if (data.Code == 0) {
          this._ts.success(data.Message);
          this.user = data.Data
        } else {
          this._ts.error(data.Message);
        }
      });
    }
  }

  goback(){
    window.history.back();
  }

}
