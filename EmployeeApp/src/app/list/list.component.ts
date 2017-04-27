import { Component, OnInit } from '@angular/core';
import {employeesListServices} from 'app/employeeslist.services';
import {MdDialog} from '@angular/material';
import {PopupComponent} from 'app/popup/popup.component';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {sharedServices} from 'app/shared.services';

@Component({
  selector: 'emp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private EmployeesListServices:employeesListServices,
  private router:Router,
  public dialog:MdDialog,
  private http:Http,
  private SharedServices:sharedServices) { }

  originalData;
  employees;
  buttonStatus=null;
  popupStatus=null;
  tempDeleteData;
  selectedId;
  sortingStatus="normal";

  ngOnInit() {
      this.EmployeesListServices.getHttp().subscribe(employees=>{
      this.employees=employees;
      this.originalData=employees});

      this.SharedServices.notifyStream$.subscribe(response=>{
        if (response.hasOwnProperty('option') && response.option=='cancelClicked'){
          this.selectedId=null;
          this.buttonStatus=null;
        }else if (response.hasOwnProperty('option')&& response.option=='submitClicked'){
          this.EmployeesListServices.getHttp().subscribe(employees=>{
          this.employees=employees;
          this.originalData=employees});
          this.selectedId=null;
          this.buttonStatus=null;
        }
      });
  }

  sortingOperation(){

    if (this.sortingStatus==="normal"){
          this.employees.sort(function(name1,name2){
          if (name1.firstName<name2.firstName){
            return -1;
          } else if (name1.firstName > name2.firstName){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="Ascending"
    }
    else if (this.sortingStatus==="Ascending"){
          this.employees.sort(function(name1,name2){
          if (name1.firstName>name2.firstName){
            return -1;
          } else if (name1.firstName < name2.firstName){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="normal"
    }
  }

  onClicked(employee){
    this.buttonStatus=1;
    this.tempDeleteData=employee;
  }

  onChange(event)
  {
    this.employees=this.originalData.filter(employee=>employee.lastName.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  onColorClicked(employeeId){
    this.selectedId=employeeId;
  }

  onAddClicked(){
    this.buttonStatus=null;
    this.selectedId=null;
    this.router.navigate(['add']);
  }

  filterClicked(){
    this.popupStatus=2;
  }

  onDeleteClicked(){
    this.popupStatus=1;
  }

  onConfirmationSubmit(filterAnswer){
    console.log(filterAnswer);
    this.popupStatus=null;
    if(filterAnswer.gender==='All')
    {
        this.employees=this.originalData;
    }else  if(filterAnswer.location!=""){
        this.employees=this.originalData.filter(employee=>employee.gender.toLowerCase().includes(filterAnswer.gender.toLowerCase()));
        this.employees=this.employees.filter(employee=>employee.location.toLowerCase().includes(filterAnswer.location.toLowerCase()));
    }
    else{
      this.employees=this.originalData.filter(employee=>employee.gender.toLowerCase().includes(filterAnswer.gender.toLowerCase()));
    }
  }

  onConfrimationNo(){
    this.popupStatus=null;
  }

  onConfrimationYes(){
    this.popupStatus=null;
    this.EmployeesListServices.delete(this.tempDeleteData.empid)
      .subscribe(()=>{
        this.EmployeesListServices.getHttp().subscribe(employees=>{
        this.employees=employees;
        this.originalData=employees;
        this.buttonStatus=null;
      });
    });
  }
}
