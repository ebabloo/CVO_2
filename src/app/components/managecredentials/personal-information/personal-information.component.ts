import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  prefixes: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'Ms'}
  ];

  suffixes: DropdownValues[] = [
    {value:'dds',viewValue:'DDS'},
    {value:'md',viewValue:'MD'},
  ]

  masculine: DropdownValues[] = [
    {value:'male',viewValue:'Male'},
    {value:'female',viewValue:'Female'},
    {value:'tg',viewValue:'Transgender'},
    {value:'other',viewValue:'Other'},
  ]

  provTitle: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'Ms'}
  ]

  maritialStatus: DropdownValues[] = [
    {value: 'single', viewValue: 'Single'},
    {value: 'married', viewValue: 'Married'},
    {value: 'divorced', viewValue: 'Divorced'}
  ]

  issuedState: DropdownValues[] = [
    {value: 'california', viewValue: 'California'},
    {value: 'texas', viewValue: 'Texas'},
    {value: 'florida', viewValue: 'Florida'}
  ]

  npdbNumber: DropdownValues[] = [
    {value: '12345', viewValue: '12345'},
    {value: '1231123', viewValue: '1231123'},
    {value: '344564', viewValue: '344564'}
  ]

  mediProvNumber: DropdownValues[] = [
    {value: 'AZX1234', viewValue: 'AZX1234'},
    {value: 'SDF1123', viewValue: 'SDF1123'},
    {value: 'FDC3464', viewValue: 'FDC3464'}
  ]

  taxonomyCode = new FormControl();
  taxonomyCodeList: string[] = ['010120123', '101010101', '101010202', '1029101034', '1010290339', '1029201023'];

  constructor() { }

  ngOnInit(): void {
  }

}
