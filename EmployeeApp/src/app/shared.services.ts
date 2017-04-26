import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class sharedServices{
    constructor(){}

    //observable source
    private notify=new Subject<any>();

    //observable stream
    notifyStream$=this.notify.asObservable();

    //service
    notifyOtherComponent(data:any){
        this.notify.next(data);
    }

}