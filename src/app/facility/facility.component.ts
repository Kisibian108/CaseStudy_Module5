import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityServiceService} from "../service/facility-service.service";
import {Router} from "@angular/router";
import {RentType} from "../model/rent-type";
import {FacilityType} from "../model/facility-type";
import {RentTypeService} from "../service/rent-type.service";
import {FacilityTypeService} from "../service/facility-type.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilities: Facility[] = [];
  rentType: RentType[] = [];
  facilityType: FacilityType[] = []
  idDelete: number;

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

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
        this.facilities = facilities;
      }
    );
  }

  showDelete(facility: Facility) {
    this.idDelete = facility.id || 0;
  }

  // delete(idDelete: number) {
  //   console.log(idDelete);
  //   this.customerService.deleteCustomer(idDelete);
  //   this.ngOnInit();
  // }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.router.navigate(['/facility'])  ;
    }, e => {
      console.log(e);
    });
  }
}
