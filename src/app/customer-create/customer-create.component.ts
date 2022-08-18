import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerType = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Golden'},
    {id: 3, name: 'Silver'},
    {id: 4, name: 'Member'}
  ];

  customerForm = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl(),
    gender: new FormControl(),
    phoneNumber: new FormControl('', [Validators.pattern('^([090|091]+[0-9]{7})|[+(84)+(90|91)+[0-9]{7}$')]),
    email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
    address: new FormControl(),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9}|[0-9]{12}$')])
  });

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    this.router.navigate(['customer'])
  }

  constructor(private customerService: CustomerService,
              private router: Router
  ) {
  }

  ngOnInit()
    :
    void {
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

}
