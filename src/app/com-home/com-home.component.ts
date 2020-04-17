import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-home',
  templateUrl: './com-home.component.html',
  styleUrls: ['./com-home.component.css']
})
export class ComHomeComponent implements OnInit {

  acceptedOrders = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['orderNumber', 'orderStatus', 'acceptedDate', 'deliverOn', 'action'];
  dataSource = new MatTableDataSource<any>(this.acceptedOrders);
  constructor(private _service:CommonService, private _ts : ToastrService, private _router:Router) { }

  ngOnInit(): void {
    this.loadMyAcceptedOrders();
    this.dataSource.paginator = this.paginator;
  }

  loadMyAcceptedOrders(){
    var obj ={
      userId : JSON.parse(localStorage.getItem('userId'))
    }
    this._service.getAllActiveOrdersByComId(obj).subscribe((data:any)=>{
      if (data.Code == 0) {
        this.acceptedOrders = data.Data;
        this.dataSource.data = this.acceptedOrders;
      } else {
        this._ts.error(data.Message);
      }
    },
    (err) => {
      this._ts.error(err);
    });
  }

  viewOrderRequests(){
    this._router.navigate(['order-reqs'])
  }

  viewOrder(element){

    element.orderStatus = "Ready to deliver";

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

}
