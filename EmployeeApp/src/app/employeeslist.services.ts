import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class employeesListServices{
    constructor(private http:Http){}
    progress;
    progressObserver;

    getHttp(){
         return this.http.get('http://localhost:8080/employee')
        .map(response=>{
            return response.json();
        });
    }

    getById(empId){
        
        return this.http.get('http://localhost:8080/employee/'+empId)
        .map(response=>{
            return response.json();
        });
    }

    add(employee,employeeId,image){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return Observable.create(observer=>{
            let formData:FormData=new FormData(), xhr:XMLHttpRequest= new XMLHttpRequest();

            if (employeeId)
            {
                formData.append("empid",employeeId);
            }

            if(image!=null)
            {
                formData.append("photo",image[0]);
            }
            else
            {
                
                formData.append("photo",null);
            } 

            formData.append("firstName",employee.firstName);
            formData.append("lastName",employee.lastName);
            formData.append("nationality",employee.nationality);
            formData.append("martialStatus",employee.martialStatus);
            formData.append("phone",employee.phone);
            formData.append("subDivision",employee.subDivision);
            formData.append("suspendDate",employee.suspendDate);
            formData.append("gender",employee.gender);
            formData.append("dateOfBirth",employee.dateOfBirth);
            formData.append("hiredDate",employee.hiredDate);
            formData.append("grade",employee.grade);
            formData.append("division",employee.division);
            formData.append("email",employee.email);
            formData.append("location",employee.location);
            formData.append("status",employee.status);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    observer.next(JSON.parse(xhr.response));
                    observer.complete();
                } else {
                    observer.error(xhr.response);
                }
               }
             };

            xhr.open('POST', 'http://localhost:8080/employee', true);
            xhr.send(formData);
            
        });
    }

    delete(empId){
    return this.http.delete('http://localhost:8080/employee/'+empId)
    .map(response=>{});
    }

}