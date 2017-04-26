import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class locationListServices{
    constructor(private http:Http){}
    
    getLocation(){
        return this.http.get('http://localhost:8080/location')
        .map(response=>{
            return response.json();
        });
    }

}