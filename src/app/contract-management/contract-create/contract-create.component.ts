import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {ContractService} from "../../service/contract.service";
import {Customer} from "../../model/customer";
import {FacilityServiceService} from "../../service/facility-service.service";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[];
  facilities: Facility[]
  contractForm: FormGroup;

  getAll() {
    this.customerService.getAll().subscribe(value => {
      console.log(value)
      this.customers = value;
      this.facilityService.getAll().subscribe(facility => {
        this.facilities = facility;
      })
    }, error => {
    }, () => {
      this.contractForm = new FormGroup({
        id: new FormControl(),
        idContract: new FormControl('', [Validators.required]),
        facility: new FormControl('', [Validators.required]),
        customer: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        deposit: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
      });
    })
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['contract'])
    }, e => {
      console.log(e);
    });
  }

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityServiceService,
              private router: Router
  ) {
    this.getAll()
  }

  ngOnInit()
    :
    void {
  }

  get idContract() {
    return this.contractForm.get('idContract');
  }

  get startDate() {
    return this.contractForm.get('startDate');
  }

  get endDate() {
    return this.contractForm.get('endDate');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }
}
