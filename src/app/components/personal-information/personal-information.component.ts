import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
