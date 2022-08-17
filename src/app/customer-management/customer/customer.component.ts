import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerManagementService} from "../../service/customer-management.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerManagementService
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();

  }
}
