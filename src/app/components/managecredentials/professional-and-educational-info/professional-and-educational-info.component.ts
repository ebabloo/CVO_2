import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface DropdownValues {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-professional-and-educational-info',
  templateUrl: './professional-and-educational-info.component.html',
  styleUrls: ['./professional-and-educational-info.component.css']
})
export class ProfessionalAndEducationalInfoComponent implements OnInit {

  primaryList: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'Ms'}
  ];

  profEducationalType = new FormControl();
  profEducationalTypeList: string[] = ['CSE', 'CIVIL', 'MECH', 'AUTO', 'ELE', 'INFOSCI'];

  specialityList: DropdownValues[] = [
    {value: 'doc', viewValue: 'DOC'},
    {value: 'md', viewValue: 'MD'},
    {value: 'mds', viewValue: 'MDs'}
  ];

  qualifiedFromList: DropdownValues[] = [
    {value: 'doc', viewValue: 'DOC'},
    {value: 'md', viewValue: 'MD'},
    {value: 'mds', viewValue: 'MDs'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
