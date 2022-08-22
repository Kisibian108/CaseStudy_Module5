import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerType: CustomerType[] = this.customerTypeService.getAll();

  customerForm = new FormGroup({
    id: new FormControl(),
    customerType: new FormControl(this.customerType[0]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl(),
    gender: new FormControl(),
    phoneNumber: new FormControl('', [Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\\b')]),
    email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
    address: new FormControl(),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9}|[0-9]{12}$')])
  });

  // submit() {
  //   const customer = this.customerForm.value;
  //   this.customerService.saveCustomer(customer);
  //   this.customerForm.reset();
  //   this.router.navigate(['customer'])
  // }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['customer'])
    }, e => {
      console.log(e);
    });
  }

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private http: HttpClient
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
