import { Component, OnInit } from '@angular/core';
import { sharedServices} from 'app/shared.services';

@Component({
  selector: 'emp-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(private SharedServices:sharedServices) { }

  ngOnInit() {

  }
}
