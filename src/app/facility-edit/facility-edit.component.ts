import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RentType} from "../model/rent-type";
import {FacilityType} from "../model/facility-type";
import {FacilityServiceService} from "../service/facility-service.service";
import {RentTypeService} from "../service/rent-type.service";
import {FacilityTypeService} from "../service/facility-type.service";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityForm: FormGroup;
  id: number ;

  rentType: RentType[] = this.rentTypeService.getAll();

  facilityType: FacilityType[] = this.facilityTypeService.getAll();

  constructor(private facilityService: FacilityServiceService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id') ;
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }


  findById(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
        area: new FormControl(facility.area,[Validators.required,Validators.pattern('^[1-9]+$')]),
        price: new FormControl(facility.price,[Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        rentType: new FormControl(facility.rentType.name, [Validators.required]),
        facilityType: new FormControl(facility.facilityType.name,[Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        other: new FormControl(facility.other, [Validators.required]),
        pool: new FormControl(facility.pool, [Validators.required]),
        floor: new FormControl(facility.floor, [Validators.required,Validators.pattern('^[1-9]+$')]),
        service: new FormControl(facility.service, [Validators.required])
      });
      console.log(
        facility
      )
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/facility'])
    }, e => {
      console.log(e);
    });
  }

}
