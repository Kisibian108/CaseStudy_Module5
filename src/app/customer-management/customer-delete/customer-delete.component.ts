import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const customer = this.findById(this.id);
      this.customerForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(customer.id),
        // @ts-ignore
        name: new FormControl(customer.name)
      });
    });
  }

  ngOnInit() {
  }

  findById(id: number) {
    return this.customerService.findById(id);
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id);
    this.router.navigate(['/customer']);
  }
}
