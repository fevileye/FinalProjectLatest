import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
        var employees;
            
          if (request.url === 'employees') {
              employees = this._employees;
          }
          else if (request.url.indexOf('employees/')>=0)
          {
            let employeeId=request.url.split("/")[1];
            employees=this._employees.find(employee=>employee.id==parseInt(employeeId));
          }
  
            responseOptions = new ResponseOptions({
              body: { employees: JSON.parse(JSON.stringify(employees)) },
              status: 200
            });
          
          break;
        case RequestMethod.Post:
          var mediaItem = JSON.parse(request.text().toString());
          mediaItem.id = this._getNewId();
          this._employees.push(mediaItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var mediaItem = this._employees.find(mediaItem => mediaItem.id === id);
    var index = this._employees.indexOf(mediaItem);
    if (index >= 0) {
      this._employees.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._employees.length > 0) {
      return Math.max.apply(Math, this._employees.map(mediaItem => mediaItem.id)) + 1;
    }
  }

  _employees = [
    {
      id: 1,
      first_name: "Firebug",
      last_name: "Series",
      gender: "Science Fiction",
      date_of_birth: 2010,
      marital_status: 1294166565384,
      phone: 20100,
      sub_division:"Java",
      status:"Contract",
      suspend_date: 2010,
      hired_date:2010,
      grade:"PG",
      division:"CDC",
      email:"Test",
      img:"src/Sources/naruto.jpg"
    },
    {
      id: 2,
      first_name: "Carterpilar",
      last_name: "Series",
      gender: "Science Fiction",
      date_of_birth: 2010,
      marital_status: 1294166565384,
      phone: 20100,
      sub_division:"Java",
      status:"Contract",
      suspend_date: 2010,
      hired_date:2010,
      grade:"PG",
      division:"CDC",
      email:"Test",
      img:"src/Sources/naruto.jpg"
    }, {
      id: 3,
      first_name: "Ant",
      last_name: "Series",
      gender: "Science Fiction",
      date_of_birth: 2010,
      marital_status: 1294166565384,
      phone: 20100,
      sub_division:"Java",
      status:"Contract",
      suspend_date: 2010,
      hired_date:2010,
      grade:"PG",
      division:"CDC",
      email:"Test",
      img:"src/Sources/naruto.jpg"
    }, {
      id: 4,
      first_name: "Spiderman",
      last_name: "Series",
      gender: "Science Fiction",
      date_of_birth: 2010,
      marital_status: 1294166565384,
      phone: 20100,
      sub_division:"Java",
      status:"Contract",
      suspend_date: 2010,
      hired_date:2010,
      grade:"PG",
      division:"CDC",
      email:"Test",
      img:"src/Sources/naruto.jpg"
    }, {
      id: 5,
      first_name: "Upin",
      last_name: "Series",
      gender: "Science Fiction",
      date_of_birth: 2010,
      marital_status: 1294166565384,
      phone: 20100,
      sub_division:"Java",
      status:"Contract",
      suspend_date: 2010,
      hired_date:2010,
      grade:"PG",
      division:"CDC",
      email:"Test",
      img:"src/Sources/naruto.jpg"
  
    }
  ];
}