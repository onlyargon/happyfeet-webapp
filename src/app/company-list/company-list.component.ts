import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList = [];
  constructor(private _service : ProfileService) { }

  ngOnInit(): void {
    console.log("hit");

    this._service.getAllCompanies({}).subscribe((data:any) =>{
      console.log(data);
      if(data.Code == 0){
        this.companyList = data.Data;
      }
    });

  }



}
