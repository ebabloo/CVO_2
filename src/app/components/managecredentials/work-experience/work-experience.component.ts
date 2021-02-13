import { Component, OnInit } from '@angular/core';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  practiceType: DropdownValues[] = [
    {value: 'doc', viewValue: 'DOC'},
    {value: 'md', viewValue: 'MD'},
    {value: 'mds', viewValue: 'MDs'}
  ];

  titleList: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'MS'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
