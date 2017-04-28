import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,XHRBackend } from '@angular/http';
import { MdButtonModule,MdToolbarModule,MdInputModule, MdSelectModule,MdCardModule,MdTabsModule, MdDialogModule,MdChipsModule,MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { MockXHRBackend } from './mock-xhr-backend';
import { Routing } from './app.routing';
import { employeesListServices } from './employeeslist.services';
import { sharedServices} from './shared.services';
import { PopupComponent } from './popup/popup.component';
import {lookupListToken,lookupLists} from'./providers'; 
import {locationListServices} from'./locationlist.services';


@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    ListComponent,
    EmployeeComponent,
    FormComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdDialogModule,
    MdInputModule,
    MdCardModule,
    MdTabsModule,
    ReactiveFormsModule,
    Routing,
    MdSelectModule,
    MdChipsModule,
    MdSnackBarModule
  ],
  providers: [
    employeesListServices,
    sharedServices,
    DatePipe,
      {provide:lookupListToken,useValue:lookupLists},
    locationListServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
