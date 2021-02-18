import { Component, OnInit } from '@angular/core';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-licensure',
  templateUrl: './licensure.component.html',
  styleUrls: ['./licensure.component.css']
})
export class LicensureComponent implements OnInit {

  stateList: DropdownValues[] = [
    {value: 'colorado', viewValue: 'Colorado'},
    {value: 'michigan', viewValue: 'Michigan'},
    {value: 'atlanta', viewValue: 'Atlanta'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
