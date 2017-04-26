import { Component, OnInit ,Input, Output,EventEmitter,Inject} from '@angular/core';
import {employeesListServices} from 'app/employeeslist.services';
import {locationListServices} from 'app/locationlist.services';
import {Router} from '@angular/router';
import {lookupListToken} from 'app/providers';
import {Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'emp-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() popupInput;
  @Output() confirmationNo = new EventEmitter();
  @Output() confirmationYes= new EventEmitter();

  constructor(private EmployeesListServices:employeesListServices,
  private router:Router,
  @Inject(lookupListToken) public lookupLists,
  private formBuilder:FormBuilder,
  private LocationListServices:locationListServices) { }


  form;
  locations;

  ngOnInit() {
    this.form = this.formBuilder.group({
      gender: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      location: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
    });

    this.LocationListServices.getLocation().subscribe(locations=>this.locations=locations);

  }

  onYesClicked(){
    this.confirmationYes.emit();
    this.router.navigate(['']);
  }

  onClose(){
    this.confirmationNo.emit();
  }
}
