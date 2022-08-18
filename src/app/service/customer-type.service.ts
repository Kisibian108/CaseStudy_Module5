import { Injectable } from '@angular/core';
import {FacilityType} from "../model/facility-type";
import {CustomerType} from "../model/customer-type";
import {Facility} from "../model/facility";

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

  saveCustomerType(customerType: CustomerType) {
    this.customerType.push(customerType);
  }

  constructor() { }
}
