import { Component, OnInit } from '@angular/core';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-payor-information',
  templateUrl: './payor-information.component.html',
  styleUrls: ['./payor-information.component.css']
})
export class PayorInformationComponent implements OnInit {

  prefixes: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'Ms'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
