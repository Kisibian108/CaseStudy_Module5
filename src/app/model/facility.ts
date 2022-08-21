import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number
  name?: string
  area?: number
  price?: number
  maxPeople?: number
  rentType ?: RentType
  facilityType?: FacilityType
  standardRoom? : string
  other?: string
  pool?: number
  floor?: number
  service?: string
  img?: string
}
