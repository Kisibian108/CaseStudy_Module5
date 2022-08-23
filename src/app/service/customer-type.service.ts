import { Injectable } from '@angular/core';
import {FacilityType} from "../model/facility-type";
import {CustomerType} from "../model/customer-type";
import {Facility} from "../model/facility";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  customerType: CustomerType[] = [{
    name: 'Diamond'
  },{
    name: 'Golden'
  },{
    name: 'Silver'
  },{
    name: 'Member'
  }]

  getAll() {
    return this.customerType;
  }

  // saveCustomerType(customerType: CustomerType) {
  //   this.customerType.push(customerType);
  // }

  // getAll(): Observable<CustomerType[]> {
  //   return this.http.get<CustomerType[]>(API_URL + '/customerType');
  // }

  constructor(private http: HttpClient) { }
}
