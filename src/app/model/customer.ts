import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  customerType: CustomerType;
  name?: string;
  birthday?: string;
  gender?: string;
  idCard?: number;
  phoneNumber?: string;
  email?: string;
  address?: string;
}
