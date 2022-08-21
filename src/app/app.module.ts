import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import { DeleteComponent } from './delete/delete.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RentTypeService} from "./service/rent-type.service";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-create', component:CustomerCreateComponent},
  {path: 'customer-edit/:id', component:CustomerEditComponent},
  {path: 'facility-create', component:FacilityCreateComponent},
  {path: 'facility-edit/:id', component:FacilityEditComponent},
  {path: 'facility', component:FacilityComponent},
  {path: 'contract', component:ContractComponent},
  {path: 'contract-create', component:ContractCreateComponent},
  {path: 'customer-delete/:id', component:CustomerDeleteComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    ContractComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    ContractCreateComponent,
    DeleteComponent,
    CustomerTypeComponent,
    CustomerDeleteComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
