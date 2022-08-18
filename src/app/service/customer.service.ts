import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [{
    id: 1,
    customerType: {name: 'Diamond'},
    name: 'Lam',
    birthday: '2022-08-08',
    gender: 'Male',
    idCard: 192123219,
    phoneNumber: '0982123219',
    email: 'fefe@gmail.com',
    address: 'Ha Tinh'
   },
    {
      id: 2,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
     },
    {
      id: 3,
      customerType: {name: 'Member'},
      name: 'Linh',
      birthday: '2022-07-12',
      gender: 'Female',
      idCard: 123214212,
      phoneNumber: '0902321234',
      email: 'linh@gmail.com',
      address: 'Quang Nam'
     },{
      id: 4,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
     },{
      id: 5,
      customerType: {name: 'Member'},
      name: 'Hien',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
      },{
      id: 6,
      customerType: {name: 'Diamond'},
      name: 'Hoai',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    },{
      id: 7,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    },{
      id: 8,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
      }];

  getAll() {
    return this.customers;
  }

  saveCustomer(customer) {
    this.customers.push(customer);
  }

  constructor() {
  }
}
