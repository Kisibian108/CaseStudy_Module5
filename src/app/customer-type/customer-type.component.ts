import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {

  // customerType: CustomerType[] = [ { name: 'Diamond'},
  //   { name: 'Golden'},
  //   { name: 'Silver'},
  //   { name: 'Member'}];

  constructor(private customerTypeService: CustomerTypeService
  ) {
  }

  ngOnInit() {
  }

  // getAll() {
  //   this.customerType = this.customerTypeService.getAll();
  // }
}
