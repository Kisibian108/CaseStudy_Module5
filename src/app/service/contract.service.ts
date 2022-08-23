import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [{
    id: 1,
    idContract: 'HD-123',
    facility: {name: 'Suite King', area: 12, img: 'erewr'},
    customer: {
      id: 1,
      customerType: {name: 'Diamond'},
      name: 'Ngoc',
      birthday: '2022-08-08',
      gender: 'male',
      idCard: 109212,
      phoneNumber: '03213',
      email: 'fefw',
      address: 'fewfew'
    },
    startDate: '2022-08-10',
    endDate: '2022-08-15',
    deposit: 1000,
  },
    {
      id: 2,
      idContract: 'HD-231',
      facility: {name: 'Twin Deluxe', area: 14, img: 're'},
      customer: {
        id: 2,
        customerType: {name: 'Diamond'},
        name: 'Ngoc',
        birthday: '2022-08-08',
        gender: 'male',
        idCard: 109212,
        phoneNumber: '03213',
        email: 'fefw',
        address: 'fewfew'
      },
      startDate: '2022-08-12',
      endDate: '2022-09-15',
      deposit: 1200,
    },
    {
      id: 3,
      idContract: 'HD-543',
      facility: {name: 'Suite King', area: 15, img: 'rew'},
      customer: {
        id: 3,
        customerType: {name: 'Diamond'},
        name: 'Ngoc',
        birthday: '2022-08-08',
        gender: 'male',
        idCard: 109212,
        phoneNumber: '03213',
        email: 'fefw',
        address: 'fewfew'
      },
      startDate: '2022-05-10',
      endDate: '2022-08-12',
      deposit: 1300,
    }, {}, {
      id: 4,
      idContract: 'HD-643',
      facility: {name: 'Suite King', area: 17, img: 'gfd'},
      customer: {
        id: 4,
        customerType: {name: 'Diamond'},
        name: 'Ngoc',
        birthday: '2022-08-08',
        gender: 'male',
        idCard: 109212,
        phoneNumber: '03213',
        email: 'fefw',
        address: 'fewfew'
      },
      startDate: '2022-06-08',
      endDate: '2022-08-08',
      deposit: 1400,
    }, {},
    {
      id: 5,
      idContract: 'HD-542',
      facility: {name: 'Suite King', area: 19, img: 'hyth'},
      customer: {
        id: 5,
        customerType: {name: 'Diamond'},
        name: 'Ngoc',
        birthday: '2022-08-08',
        gender: 'male',
        idCard: 109212,
        phoneNumber: '03213',
        email: 'fefw',
        address: 'fewfew'
      },
      startDate: '2022-08-11',
      endDate: '2022-08-19',
      deposit: 1500,

    }, {}];

  // getAll() {
  //   return this.contracts;
  // }
  //
  // saveContract(contract: Contract) {
  //   this.contracts.push(contract);
  // }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }

  // saveCustomer(customer) {
  //   this.customers.push(customer);
  // }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }

  constructor(private http:HttpClient) {
  }
}
