import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerType: CustomerType[] = [];
  idDelete: number;
  nameCustomer: string
  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    }
    );
  }

  showDelete(customer: Customer) {
    this.idDelete = customer.id || 0;
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['/customer']).then(r => this.ngOnInit() )  ;
    }, e => {
      console.log(e);
    });
  }

  // searchName(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>("http://localhost:4200/customer?name_like=" + this.name)
  // }

  // getAll(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(API_URL + '/customers');
  // }
  //
  // saveCustomer(customer): Observable<Customer> {
  //   return this.http.post<Customer>(API_URL + '/customers', customer);
  // }
  //
  // findById(id: number): Observable<Customer> {
  //   return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  // }
  //
  // updateCustomer(id: number, customer: Customer): Observable<Customer> {
  //   return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  // }
  //
  //
  // deleteCustomer(id: number): Observable<Customer> {
  //   return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  // }
}
