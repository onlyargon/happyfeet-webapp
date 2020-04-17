import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { CommonService } from "../common.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-com-cust-orders",
  templateUrl: "./com-cust-orders.component.html",
  styleUrls: ["./com-cust-orders.component.css"],
})
export class ComCustOrdersComponent implements OnInit {
  orders = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  selectedOrder = {} as any;

  design = {} as any;
  displayedColumns: string[] = ["orderNumber", "orderStatus", "view"];
  dataSource = new MatTableDataSource<any>(this.orders);

  minDate :Date;

  constructor(
    private _service: CommonService,
    private _ts: ToastrService,
    private _router: Router
  ) {
    this.minDate = new Date(new Date().getTime() -1);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadMyAcceptedOrders();
  }

  loadMyAcceptedOrders() {
    var obj = {
      userId: localStorage.getItem("userId"),
    };
    this._service.getAllActiveOrders(obj).subscribe(
      (data: any) => {
        if (data.Code == 0) {
          this.orders = data.Data;
          this.dataSource.data = this.orders;
        } else {
          this._ts.error(data.Message);
        }
      },
      (err) => {
        this._ts.error(err);
      }
    );
  }

  viewOrder(obj) {
    this.selectedOrder = obj;
    var req = {
      id: obj.designId,
    };
    this._service.getAllActiveDesignByUid(req).subscribe((data: any) => {
      if (data.Code == 0) {
        this.design = data.Data;
        this.initColors();
      } else {
        this._ts.error(data.Message);
      }
    });
  }

  viewOrderRequests() {
    this._router.navigate(["order-reqs"]);
  }

  initColors() {
    document.getElementById("sole").style.fill = this.design.soleColor;
    document.getElementById("quater").style.fill = this.design.quaterColor;
    document.getElementById("vamp").style.fill = this.design.vampColor;
  }

  acceptOrder() {
    if (this.selectedOrder.deliverOn) {
      console.log(this.selectedOrder);
      this.selectedOrder.isOrderAccepted = true;
      this.selectedOrder.acceptedDate = new Date().toLocaleString();
      this.selectedOrder.comId = JSON.parse(localStorage.getItem("userId"));
      this.selectedOrder.orderStatus = "Order accepted";
      this._service.updateOrder(this.selectedOrder).subscribe(
        (data: any) => {
          if (data.Code == 0) {
            this._ts.success("Order accepted!");
          } else {
            this._ts.error(data.Message);
          }
        },
        (err) => {
          this._ts.error(err);
        }
      );
    } else {
      this._ts.warning("Please fill the mandetory fields!");
    }
  }
}
