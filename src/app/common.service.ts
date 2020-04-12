import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOME_URL } from './helpers/appConstant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  // Design
  saveDesign(obj){
    return this.http.post(HOME_URL + 'design/create', obj)
  }

  updateDesign(obj){
    return this.http.post(HOME_URL + 'design/update', obj)
  }

  deleteDesign(obj){
    return this.http.post(HOME_URL + 'design/delete', obj)
  }

  getAllActiveDesign(obj){
    return this.http.post(HOME_URL + 'design/get-all', obj)
  }

  getAllActiveDesignByUid(obj){
    return this.http.post(HOME_URL + 'design/get-by-id', obj)
  }

  //Orders
  saveOrder(obj){
    return this.http.post(HOME_URL + 'orders/create', obj)
  }

  updateOrder(obj){
    return this.http.post(HOME_URL + 'orders/update', obj)
  }

  cancelOrder(obj){
    return this.http.post(HOME_URL + 'orders/cancel', obj)
  }

  getAllActiveOrders(obj){
    return this.http.post(HOME_URL + 'orders/get-all-active', obj)
  }

  getAllActiveOrdersByUid(obj){
    return this.http.post(HOME_URL + 'orders/get-by-uid', obj)
  }

  getAllActiveOrdersByComId(obj){
    return this.http.post(HOME_URL + 'orders/get-by-comId', obj)
  }


}
