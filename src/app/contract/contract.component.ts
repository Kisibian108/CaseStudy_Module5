import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {CustomerService} from "../service/customer.service";
import {CustomerTypeService} from "../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Contract[] = [];
  idDelete: number;

  constructor(
    private contractService: ContractService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contracts => {
        this.contracts = contracts;
      }
    );
  }

}
