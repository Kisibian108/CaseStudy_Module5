import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RentType} from "../../model/rent-type";
import {FacilityServiceService} from "../../service/facility-service.service";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityType} from "../../model/facility-type";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  temp: string;

  facilityForm = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 100)),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    area: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('',[Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    other: new FormControl('', [Validators.required]),
    pool: new FormControl('', [Validators.required,Validators.pattern('^[1-9]+$')]),
    floor: new FormControl('', [Validators.required,Validators.pattern('^[1-9]+$')]),
    service: new FormControl('', [Validators.required]),
    img: new FormControl('https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg')
  });

  rentType: RentType[] = this.rentTypeService.getAll();

  facilityType: FacilityType[] = this.facilityTypeService.getAll();

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe();
    console.log(facility)
    this.facilityForm.reset();
    this.router.navigate(['facility'])
  }

  constructor(private facilityService: FacilityServiceService,
              private rentTypeService : RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router
  ) {
  }

  ngOnInit()
    :
    void {
  }

  get name() {
    return this.facilityForm.get('name');
  }

  get area() {
    return this.facilityForm.get('area');
  }

  get price() {
    return this.facilityForm.get('price');
  }

  get maxPeople() {
    return this.facilityForm.get('maxPeople');
  }

  get standardRoom() {
    return this.facilityForm.get('standardRoom');
  }

  get other() {
    return this.facilityForm.get('other');
  }

  get pool() {
    return this.facilityForm.get('pool');
  }

  get floor() {
    return this.facilityForm.get('floor');
  }

  get service() {
    return this.facilityForm.get('service');
  }

  get img() {
    return this.facilityForm.get('img');
  }

  changeFacility(even: string) {
    this.temp = even;
    console.log(this.temp);
  }
}
