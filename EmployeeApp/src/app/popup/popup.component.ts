import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {employeesListServices} from 'app/employeeslist.services';
import {Router} from '@angular/router';

@Component({
  selector: 'emp-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() deleteData;
  @Output() confirmationNo = new EventEmitter();
  @Output() confirmationYes= new EventEmitter();

  constructor(private EmployeesListServices:employeesListServices,
  private router:Router) { }


  ngOnInit() {
    
  }

  onYesClicked(){
    this.confirmationYes.emit();
    this.router.navigate(['']);
  }

  onClose(){
    this.confirmationNo.emit();
  }
}
