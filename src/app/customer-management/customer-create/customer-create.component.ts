import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {ToastrService} from "ngx-toastr";

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
    name: new FormControl('', [Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
    birthday: new FormControl('', this.ageValidate),
    gender: new FormControl(),
    phoneNumber: new FormControl('', [Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\\b')]),
    email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
    address: new FormControl(),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9}|[0-9]{12}$')])
  });

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      // alert("them moi thanh cong")
      this.toastrService.success("Them moi thanh cong")
      this.router.navigate(['customer'])
    }, e => {
      console.log(e);
    });
  }

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
  }

  ageValidate(dob: AbstractControl) {
    const now = new Date();
    const birthDay = new Date(dob.value);
    const age = now.getFullYear() - birthDay.getFullYear();
    if (age < 18) {
      return {'ageError': true};
    }
    return null;
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
