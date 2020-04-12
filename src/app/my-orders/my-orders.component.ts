import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders = [];

  displayedColumns: string[] = ['orderNumber', 'orderStatus', 'acceptedDate', 'deliverOn', 'action'];
  dataSource = new MatTableDataSource<any>(this.myOrders);

  constructor(private _service:CommonService, private _ts : ToastrService) { }

  ngOnInit(): void {
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

}
