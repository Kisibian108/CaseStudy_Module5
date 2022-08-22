import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer-management/customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility-management/facility/facility.component';
import { ContractComponent } from './contract-management/contract/contract.component';
import { CustomerEditComponent } from './customer-management/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-management/customer-create/customer-create.component';
import { FacilityEditComponent } from './facility-management/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility-management/facility-create/facility-create.component';
import { ContractCreateComponent } from './contract-management/contract-create/contract-create.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import { DeleteComponent } from './customer-management/delete/delete.component';
import { CustomerTypeComponent } from './customer-management/customer-type/customer-type.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerDeleteComponent } from './customer-management/customer-delete/customer-delete.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
