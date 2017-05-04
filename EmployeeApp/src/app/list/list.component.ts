import { Component, OnInit } from '@angular/core';
import {employeesListServices} from 'app/employeeslist.services';
import {MdDialog,MdSnackBar} from '@angular/material';
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
  private SharedServices:sharedServices,
  private snackbar:MdSnackBar) { }

  originalData;
  employees;
  buttonStatus=null;
  popupStatus=null;
  tempDeleteData;
  selectedId;
  highlightFilter=null;
  sortingStatus="ascending";
  tempFilterData;
  currentSearch=null;

  ngOnInit() {
      this.EmployeesListServices.getHttp().subscribe(employees=>{
      this.employees=employees;
      this.originalData=employees;
      this.tempFilterData=employees;
     });

      this.SharedServices.notifyStream$.subscribe(response=>{
        if (response.hasOwnProperty('option') && response.option=='cancelClicked'){
          this.selectedId=null;
          this.buttonStatus=null;
        }else if (response.hasOwnProperty('option')&& response.option=='submitClicked'){
          this.EmployeesListServices.getHttp().subscribe(employees=>{
          this.employees=employees;
          this.originalData=employees
          this.tempFilterData=employees;
          this.highlightFilter=null;
      });
          this.selectedId=null;
          this.buttonStatus=null;
        }else if(response.hasOwnProperty('option') && response.option=='loadSelectedId'){
          this.selectedId=response.value}
      });

  }

  sortingOperation(){

    if (this.sortingStatus==="ascending"){
          this.employees.sort(function(name1,name2){
          if (name1.lastName.toLowerCase()<name2.lastName.toLowerCase()){
            return -1;
          } else if (name1.lastName.toLowerCase() > name2.lastName.toLowerCase()){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="descending";
      this.snackbar.open("Sorted in Ascending","Close",{
        duration:2000,
      });
    }
    else if (this.sortingStatus==="descending"){
          this.employees.sort(function(name1,name2){
          if (name1.lastName.toLowerCase()>name2.lastName.toLowerCase()){
            return -1;
          } else if (name1.lastName.toLowerCase() < name2.lastName.toLowerCase()){
            return 1;
          } else {
            return 0;
          }       
      });
      this.sortingStatus="ascending";
      this.snackbar.open("Sorted in Descending","Close",{
        duration:2000,
      });
    }
  }

  onClicked(employee){
    this.buttonStatus=1;
    this.tempDeleteData=employee;
  }

  onChange(event)
  {
    this.currentSearch=event.target.value;
    this.employees=this.tempFilterData.filter(employee=>{
      let name=`${employee.firstName} ${employee.lastName}`;
     return name.toLowerCase().includes(event.target.value.toLowerCase());
    });
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
    this.popupStatus=null;
    if(filterAnswer.gender==='All' && filterAnswer.location==='All')
    {
        this.highlightFilter=null;
        this.employees=this.originalData;
        this.tempFilterData=this.employees;
        
    }else if(filterAnswer.location!="All" && filterAnswer.gender!="All" ){
        this.employees=this.originalData.filter(employee=>employee.gender.toLowerCase()===filterAnswer.gender.toLowerCase());
        this.employees=this.employees.filter(employee=>employee.location.locName.toLowerCase()===filterAnswer.location.toLowerCase());
        this.snackbar.open("Filter based on "+filterAnswer.gender+" and location "+filterAnswer.location,"Cancel",{
          duration:2000,
        });
         this.highlightFilter=1;
         this.tempFilterData=this.employees;
    }
    else if (filterAnswer.location!="" && filterAnswer.gender=='All'){
      this.employees=this.originalData.filter(employee=>employee.location.locName.toLowerCase()===filterAnswer.location.toLowerCase());
      this.highlightFilter=1;
      this.tempFilterData=this.employees;
      this.snackbar.open("Filter based on "+filterAnswer.location,"Cancel",{
        duration:2000,
      });
    }
    else if (filterAnswer.location==='All' && filterAnswer.gender!=""){
      this.employees=this.originalData.filter(employee=>employee.gender.toLowerCase()===filterAnswer.gender.toLowerCase());
      this.highlightFilter=1;
      this.tempFilterData=this.employees;
      this.snackbar.open("Filter based on "+filterAnswer.location,"Cancel",{
        duration:2000,
      });
    }
    else{
       this.employees=this.originalData.filter(employee=>employee.gender.toLowerCase()===filterAnswer.gender.toLowerCase());
       this.highlightFilter=1;
       this.tempFilterData=this.employees;
    }
    
    if (filterAnswer.location==""){
      this.snackbar.open("Filter based on "+filterAnswer.gender,"Cancel",{
          duration:2000,
        });
    }

   
    if (this.currentSearch!=null)
    {
      this.employees=this.tempFilterData.filter(employee=>{
          let name=`${employee.firstName} ${employee.lastName}`;
        return name.toLowerCase().includes(this.currentSearch.toLowerCase());
        });
      }
  }

  onConfrimationNo(){
    this.popupStatus=null;
  }

  onConfrimationYes(){
    this.popupStatus=null;
    this.highlightFilter=null;
    this.EmployeesListServices.delete(this.tempDeleteData.empid)
      .subscribe(()=>{
        this.snackbar.open("Data has been deleted","Cancel",{
          duration:2000,
        })
        this.EmployeesListServices.getHttp().subscribe(employees=>{
        this.employees=employees;
        this.originalData=employees;
        this.tempFilterData=this.employees;
        this.buttonStatus=null;
      });
    });
  }
}
