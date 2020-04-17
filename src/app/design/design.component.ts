import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-design",
  templateUrl: "./design.component.html",
  styleUrls: ["./design.component.css"],
})
export class DesignComponent implements OnInit {
  design = {
    category: "Men",
    occasion: "Casual",
    type: "Shoes",
  } as any;
  myDesign = [];
  constructor(private _service: CommonService, private _ts: ToastrService) {}

  ngOnInit(): void {
    this.getMydesigns();
  }

  getMydesigns() {
    var uid = localStorage.getItem("userId");
    var obj = {
      userId: uid,
    };

    this._service.getAllActiveDesign(obj).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this.myDesign = data.Data;
          console.log(this.myDesign);
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
  }

  editDesgin(des) {
    this.design = des;
    this.initColors();
  }

  deleteDesign(des) {
    this._service.deleteDesign(des).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
  }

  initColors() {
    document.getElementById("sole").style.fill = this.design.soleColor;
    document.getElementById("quater").style.fill = this.design.quaterColor;
    document.getElementById("vamp").style.fill = this.design.vampColor;
  }

  soleColorChage($event) {
    var color = $event.color;
    this.design.soleColor = color.hex;
    document.getElementById("sole").style.fill = color.hex;
  }

  quaterColorChage($event) {
    var color = $event.color;
    this.design.quaterColor = color.hex;
    document.getElementById("quater").style.fill = color.hex;
  }

  vampColorChage($event) {
    var color = $event.color;
    this.design.vampColor = color.hex;
    document.getElementById("vamp").style.fill = color.hex;
  }

  saveOrUpdateDesign() {
    if (this.design.id) {
      this._service.updateDesign(this.design).subscribe(
        (data: any) => {
          if (data.Code == 0) {
            this._ts.success(data.Message);
            this.ngOnInit();
          } else {
            this._ts.error(data.Message);
          }
        },
        (err) => {
          this._ts.error(err);
        }
      );
    } else {
      this.saveDesign();
    }
  }

  goback() {
    window.history.back();
  }

  saveDesign() {
    this.design.userId = localStorage.getItem("userId");
    this._service.saveDesign(this.design).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
          this.design = data.Data;
          this.ngOnInit();
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
  }

  async placeOrder() {
    if (this.design.id) {
      var obj = {
        userId: JSON.parse(localStorage.getItem("userId")),
        designId: this.design.id,
      };

      this.saveOrder(obj);
    } else {

      this.design.userId = localStorage.getItem("userId");
    this._service.saveDesign(this.design).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
          this.design = data.Data;

          var obj = {
            userId: JSON.parse(localStorage.getItem("userId")),
            designId: this.design.id,
          };

          this.saveOrder(obj);
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
    }
  }

  saveOrder(obj) {
    this._service.saveOrder(obj).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this._ts.success(data.Message);
          this.ngOnInit();
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
  }
}
