import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityServiceService} from "../service/facility-service.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilities: Facility[] = [];

  constructor(private facilityService: FacilityServiceService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }
}
