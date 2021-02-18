import { Component, OnInit } from '@angular/core';

interface DropdownValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cme',
  templateUrl: './cme.component.html',
  styleUrls: ['./cme.component.css']
})
export class CmeComponent implements OnInit {

  creditType: DropdownValues[] = [
    {value: 'installment', viewValue: 'Installment'},
    {value: 'revolving', viewValue: 'Revolving'},
    {value: 'open', viewValue: 'Open'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
