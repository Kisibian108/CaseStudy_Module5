import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerType} from "../model/customer-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerType: CustomerType[] = [];
  idDelete: number;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  // getAll() {
  //   this.customers = this.customerService.getAll();
  //   this.customerType = this.customerTypeService.getAll();
  // }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    }
    );
  }

  showDelete(customer: Customer) {
    this.idDelete = customer.id || 0;
  }

  // delete(idDelete: number) {
  //   console.log(idDelete);
  //   this.customerService.deleteCustomer(idDelete);
  //   this.ngOnInit();
  // }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['/customer'])  ;
    }, e => {
      console.log(e);
    });
  }
}
