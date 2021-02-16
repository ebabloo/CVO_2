import { Component, OnInit } from '@angular/core';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-peer-references',
  templateUrl: './peer-references.component.html',
  styleUrls: ['./peer-references.component.css']
})
export class PeerReferencesComponent implements OnInit {

  prefixes: DropdownValues[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'ms', viewValue: 'Ms'}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
