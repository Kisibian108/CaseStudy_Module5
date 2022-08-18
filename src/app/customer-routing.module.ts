import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";

// const routes: Routes = [
//   {path: '', pathMatch: 'full', redirectTo: 'customer'},
//   {path: 'customer', component: CustomerComponent},
//   {path: 'customer-create', component:CustomerCreateComponent},
//   {path: 'customer-edit', component:CustomerEditComponent}
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
