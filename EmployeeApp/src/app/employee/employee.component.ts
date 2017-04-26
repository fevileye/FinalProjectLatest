import { Component, OnInit } from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'emp-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router:Router) { }

  @Input() employee;
  @Output() deleteButton=new EventEmitter();
  @Output() informationButton=new EventEmitter();
  @Output( ) colorStatus=new EventEmitter();

  ngOnInit() {
  }

  showColor(){
    this.colorStatus.emit(this.employee.empid);
  }

  showDeleteButton(){
    this.deleteButton.emit(this.employee);
  }
  
  showInformation(){
    this.router.navigate(['employee/'+this.employee.empid]);
  }
}
