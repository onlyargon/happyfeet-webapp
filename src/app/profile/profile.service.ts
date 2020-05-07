import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOME_URL } from '../helpers/appConstant';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile(obj){
    return this.http.post(HOME_URL + 'users/get-profile-by-userId', obj)
  }

  saveProfile(obj){
    return this.http.post(HOME_URL + 'users/create', obj)
  }

  updateProfile(obj){
    return this.http.post(HOME_URL + 'users/update', obj)
  }

  getAllCompanies(obj){
    return this.http.post(HOME_URL + 'users/get-all-companies', obj)
  }
}
