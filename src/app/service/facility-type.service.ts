import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityType} from "../model/facility-type";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  facilityType: FacilityType[] = [{
    id: 1,
    name: 'Villa'
   },{
    id:2,
    name: 'House'
  },{
    id:3,
    name: 'Room'
  }]

  getAll() {
    return this.facilityType;
  }

  saveFacilityType(facilityType: FacilityType) {
    this.facilityType.push(facilityType);
  }

  constructor() { }
}
