import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;

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
    }, {
      id: 4,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    }, {
      id: 5,
      customerType: {name: 'Member'},
      name: 'Hien',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    }, {
      id: 6,
      customerType: {name: 'Diamond'},
      name: 'Hoai',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    }, {
      id: 7,
      customerType: {name: 'Silver'},
      name: 'Ngoc',
      birthday: '2022-07-10',
      gender: 'Female',
      idCard: 123212321,
      phoneNumber: '0902123212',
      email: 'ngoc@gmail.com',
      address: 'Da Nang'
    }, {
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

  // getAll() {
  //   return this.customers;
  // }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  // saveCustomer(customer) {
  //   this.customers.push(customer);
  // }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  constructor(private http:HttpClient) {
  }

  // findById(id: number) {
  //   return this.customers.find(customer => customer.id === id);
  // }
  //
  // updateCustomer(id: number, customer: Customer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id === id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  // deleteCustomer(id: number) {
  //   this.customers = this.customers.filter(customer => {
  //     return customer.id !== id;
  //   });
  // }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
}
