import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerType: CustomerType[] = [];
  idDelete: number;
  name: string
  keyword: string
  p: number = 0;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private router: Router,
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
    this.name = customer.name
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['/customer']).then(r => this.ngOnInit());
    }, e => {
      console.log(e);
    });
  }

  search(): void {
    this.customerService.findCustomerByName(this.keyword).subscribe(customerList => {
      this.customers = customerList;
    });
  }
}
