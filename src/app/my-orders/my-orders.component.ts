import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders = [];
  company = {
    basicInfo : {} as any,
    address : {} as any
  } as any;

  displayedColumns: string[] = ['orderNumber', 'orderStatus', 'acceptedDate', 'deliverOn', 'action'];
  dataSource = new MatTableDataSource<any>(this.myOrders);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _service:CommonService, private _ts : ToastrService, private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getMyOrders();
  }

  getMyOrders(){
    var obj ={
      userId : localStorage.getItem('userId')
    }
    this._service.getAllActiveOrdersByUid(obj).subscribe((data:any)=>{
      if (data.Code == 0) {
        this.myOrders = data.Data;
        this.dataSource.data = this.myOrders;
      } else {
        this._ts.error(data.Message);
      }
    },
    (err) => {
      this._ts.error(err);
    });
  }

  findStore(){}

  cancelOrder(element){

    element.isDeleted = true;
    element.isActive = false;
    element.orderStatus = "Order canceled by " + JSON.parse(localStorage.getItem('userName'));

    this._service.updateOrder(element).subscribe((data:any)=> {
      if (data.Code == 0) {
        this._ts.success("Order updated!");
      } else {
        this._ts.error(data.Message);
      }
    },
    (err) => {
      this._ts.error(err);
    });
  }

  viewCompany(element){
    var obj = {
      userId: element.comId,
    };

    this._profileService.getUserProfile(obj).subscribe((data: any) => {
      if (data.Data) {
        console.log(data);
        this.company = data.Data;
      }
    });
  }

}
