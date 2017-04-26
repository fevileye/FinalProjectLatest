import {Component, OnInit ,Inject} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {employeesListServices} from 'app/employeeslist.services';
import {locationListServices} from 'app/locationlist.services';
import {Validators,FormBuilder} from '@angular/forms';
import {sharedServices} from 'app/shared.services';
import {DatePipe} from '@angular/common';
import {lookupListToken} from 'app/providers';


@Component({
  selector: 'emp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formStatus=null;
  employee=null;
  imageSource;
  form;
  file;
  locationList;
  employeeId;

  constructor(
    private formBuilder:FormBuilder,
    private EmployeesListServices: employeesListServices,
    private LocationListServices:locationListServices,
  private activatedRoute:ActivatedRoute,
  private router:Router,
  private SharedServices:sharedServices,
  private datePipe:DatePipe,
  @Inject(lookupListToken) public lookupLists
 ) {}

  ngOnInit() {
    this.onEmpty();
    this.imageSource="src/Sources/profilePicture.png";
    this.LocationListServices.getLocation().subscribe(location=>this.locationList=location);
    this.activatedRoute.params
    .subscribe(params=>{
      this.employeeId=params['id'];
      if(this.employeeId){
        this.EmployeesListServices.getById(this.employeeId)
        .subscribe(employee=>{
          this.employee=employee;
          this.formStatus=1;
          this.onFillValue();
        });   
      }
    });

  }

   onEmpty(){
      this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      nationality: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      martialStatus: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      phone: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      subDivision: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      suspendDate: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      dateOfBirth: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      hiredDate: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      grade: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      division: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      email: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
       location: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      status: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      

    });
  }

  onFillValue(){
    let value="";
    this.form.controls['firstName'].setValue(this.employee.firstName);
    this.form.controls['lastName'].setValue(this.employee.lastName);
    this.form.controls['gender'].setValue(this.employee.gender);
    var date=new Date(this.employee.dateOfBirth);
    value=this.datePipe.transform(date,'yyyy-MM-dd');
    this.form.controls['dateOfBirth'].setValue(value);
    this.form.controls['nationality'].setValue(this.employee.nationality);
    this.form.controls['martialStatus'].setValue(this.employee.martialStatus);
    this.form.controls['phone'].setValue(this.employee.phone);
    this.form.controls['subDivision'].setValue(this.employee.subDivision);
    this.form.controls['suspendDate'].setValue(this.employee.suspendDate);
    var date=new Date(this.employee.hiredDate);
    value=this.datePipe.transform(date,'yyyy-MM-dd');
    this.form.controls['hiredDate'].setValue(value);
    this.form.controls['grade'].setValue(this.employee.grade);
    this.form.controls['division'].setValue(this.employee.division);
    this.form.controls['email'].setValue(this.employee.email);
    this.form.controls['location'].setValue(this.employee.location);
    this.form.controls['status'].setValue(this.employee.status);
  }

  onSubmit(employee){
    this.EmployeesListServices.add(employee,this.employeeId).subscribe(response=>{
      this.router.navigate(['']);
      this.SharedServices.notifyOtherComponent({option:'submitClicked',value:'OK'});
    });
    
  }

  onCancelClicked(){
    this.formStatus=null;
    this.SharedServices.notifyOtherComponent({option:'cancelClicked',value:'cancel'});
    this.router.navigate(['']);   
  }

  fileEvent(source){

    this.file = source.srcElement.files;

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageSource = event.target.result;
    }
    reader.readAsDataURL(source.target.files[0]);
  
  }

}
