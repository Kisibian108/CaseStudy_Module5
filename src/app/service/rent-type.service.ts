import { Injectable } from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  rentType: RentType[] = [{
    id: 1,
    name: 'Daily'
  },{
    id: 2,
    name: 'Monthly'
  },{
    id: 3,
    name: 'Yearly'
  }]

  getAll() {
    return this.rentType;
  }

  saveRentType(rentType: RentType) {
    this.rentType.push(rentType);
  }

  constructor() { }
}
