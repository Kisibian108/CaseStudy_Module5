import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id: number ;

  customerType: CustomerType[] = this.customerTypeService.getAll();

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id') ;
      this.findById(this.id);
      // const customer = this.findById(this.id);
      // this.customerForm = new FormGroup({
      //   id: new FormControl(customer.id),
      //   customerType: new FormControl(customer.customerType.name, [Validators.required]),
      //   name: new FormControl(customer.name, [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
      //   birthday: new FormControl(customer.birthday, [Validators.required]),
      //   gender: new FormControl(customer.gender, [Validators.required]),
      //   idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
      //   phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern('((09|03|07|08|05)+([0-9]{8})\\b)')]),
      //   email: new FormControl(customer.email, [Validators.required, Validators.email]),
      //   address: new FormControl(customer.address, [Validators.required])
      });
  }

  ngOnInit(): void {
    // // @ts-ignore
    // this.id = this.router.snapshot.paramMap.get('id');
  }

  // findById(id: number) {
  //   return this.customerService.findById(id);
  // }
  //
  // updateCustomer(id: number) {
  //   const customer = this.customerForm.value;
  //   this.customerService.updateCustomer(id, customer);
  //   alert('Edit done');
  //   this.router.navigate(['/customer']);
  // }

  findById(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = new FormGroup({
          id: new FormControl(customer.id),
          customerType: new FormControl(customer.customerType.name, [Validators.required]),
          name: new FormControl(customer.name, [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
          birthday: new FormControl(customer.birthday, [Validators.required]),
          gender: new FormControl(customer.gender, [Validators.required]),
          idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
          phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern('((09|03|07|08|05)+([0-9]{8})\\b)')]),
          email: new FormControl(customer.email, [Validators.required, Validators.email]),
          address: new FormControl(customer.address, [Validators.required]),
      });
      console.log(
        customer
      )
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/customer'])
    }, e => {
      console.log(e);
    });
  }
}
