import {Facility} from "./facility";
import {Customer} from "./customer";

export interface Contract {
  id?: number
  idContract?: string
  facility?: Facility
  customer?: Customer
  startDate?: string
  endDate?: string
  deposit?: number

}
