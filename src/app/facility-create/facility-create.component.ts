import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityType = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'Room'},
    {id: 3, name: 'House'}
  ];

  facilityForm = new FormGroup({
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
    const facility = this.facilityForm.value;
    this.customerService.saveCustomer(facility);
    this.facilityForm.reset();
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
    return this.facilityForm.get('phoneNumber');
  }

  get email() {
    return this.facilityForm.get('email');
  }

  get idCard() {
    return this.facilityForm.get('idCard');
  }

}
