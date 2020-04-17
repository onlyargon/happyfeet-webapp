import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-com-profile',
  templateUrl: './com-profile.component.html',
  styleUrls: ['./com-profile.component.css']
})
export class ComProfileComponent implements OnInit {

  loggedUser = "there!";
  subHeaidng = "";
  user = {
    basicInfo: {
      userId : JSON.parse(localStorage.getItem("userId")),
      userType : 'Company',
    } as any,
    address: {
      userId: JSON.parse(localStorage.getItem("userId")),
    } as any,
  } as any;

  constructor(private _service: ProfileService, private _ts: ToastrService) {}

  ngOnInit(): void {
    var uName = JSON.parse(localStorage.getItem("userName"));
    this.loggedUser = uName;
    this.getUserProfile();
  }

  getUserProfile() {
    var obj = {
      userId: localStorage.getItem("userId"),
    };

    this._service.getUserProfile(obj).subscribe((data: any) => {
      if (data.Data) {
        this.user = data.Data;
      }
    });
  }

  saveProfile() {
    if (this.user.basicInfo.id) {
      this._service.updateProfile(this.user).subscribe((data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
        } else {
          this._ts.error(data.Message);
        }
      });
    } else {
      this._service.saveProfile(this.user).subscribe((data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
          this.user = data.Data;
        } else {
          this._ts.error(data.Message);
        }
      });
    }
  }

  goback() {
    window.history.back();
  }

}
