import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityServiceService} from "../../service/facility-service.service";
import {Router} from "@angular/router";
import {RentType} from "../../model/rent-type";
import {FacilityType} from "../../model/facility-type";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilities: Facility[] = [];
  p: number = 0;
  // rentType: RentType[] = [];
  // facilityType: FacilityType[] = []
  idDelete: number;
  name: string;
  area: number;
  price: number;
  maxPeople: number;
  rentType: string;
  facilityType: string;
  standardRoom: string;
  other: string;
  pool: number;
  floor: number;
  service: string;

  constructor(
    private facilityService: FacilityServiceService,
    private rentTypeService: RentTypeService,
    private facilityTypeService: FacilityTypeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  // @ts-ignore
  getAll(): Facility[] {
    this.facilityService.getAll().subscribe(facilities => {
        this.facilities = facilities;
      }
    );
  }

  showDelete(facility: Facility) {
    this.idDelete = facility.id || 0;
    this.name = facility.name
  }

  // delete(idDelete: number) {
  //   console.log(idDelete);
  //   this.customerService.deleteCustomer(idDelete);
  //   this.ngOnInit();
  // }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.router.navigate(['/facility']).then(r => this.ngOnInit())  ;
    }, e => {
      console.log(e);
    });
  }

  showFacility(facility: Facility) {
    this.name = facility.name;
    this.area = facility.area;
    this.price = facility.price;
    this.maxPeople = facility.maxPeople;
    this.rentType = facility.rentType.name;
    this.facilityType = facility.facilityType.name;
    this.standardRoom = facility.standardRoom;
    this.other = facility.other;
    this.pool = facility.pool;
    this.floor = facility.floor;
    this.service = facility.service;
  }
}
