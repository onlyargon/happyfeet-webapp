import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  user = {} as any;
  auth = {} as any;

  constructor(private toastr: ToastrService, private _service: AuthService,
    private _router :Router) {}

  ngOnInit(): void {
    this.user.userType = "Customer";
  }

  signIn() {
    if (this.auth.username && this.auth.password) {
      this._service
        .signIn(this.auth.username, this.auth.password)
        .subscribe((data: any) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", data.Data);
            this._router.navigate(['/']);
          } else {
            this.toastr.error("Something went wrong!");
          }
        });
    } else {
      this.toastr.error("Please fill the mandetory fields!");
    }
  }

  register() {
    if (this.user.username && this.user.password && this.user.cpassword) {
      if (this.user.password == this.user.cpassword) {
        this._service.register(this.user).subscribe(
          (data: any) => {
            if (data.Code == 0) {
              this.toastr.success(data.Message);
            } else {
              this.toastr.error(data.Message);
            }
          },
          error => {
            this.toastr.error("Something went wrong!");
          }
        );
      } else {
        this.toastr.error("Passwords are not matched!");
      }
    } else {
      this.toastr.error("Please fill the mandetory fields!");
    }
  }
}
