import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOME_URL } from '../helpers/appConstant';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(username, password) {

    const url = HOME_URL + 'auth/validate';

    const NetworkStatus1 = btoa(username);
    const NetworkStatus2 = btoa(sha256(password));

    const body = {
      networkStatus1: NetworkStatus1,
      networkStatus2: NetworkStatus2
    };

    return this.http.post(url, body);
  }

  register(obj) {

    const url = HOME_URL + 'auth/register';

    const NetworkStatus1 = btoa(obj.username);
    const NetworkStatus2 = btoa(sha256(obj.password));

    const body = {
      basicInfo : {
        networkStatus1: NetworkStatus1,
        networkStatus2: NetworkStatus2,
        userType :obj.userType
      }
    };

    console.log(body);
    debugger;
    return this.http.post(url, body);
  }
}
