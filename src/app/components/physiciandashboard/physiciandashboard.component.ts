import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physiciandashboard',
  templateUrl: './physiciandashboard.component.html',
  styleUrls: ['./physiciandashboard.component.css']
})
export class PhysiciandashboardComponent implements OnInit {

  public activeClass: any

  navLinks = [
    {
      "iconName": "tv",
      "linkName": "Dashboard"
    },
    {
      "iconName": "local_hospital",
      "linkName": "Features"
    },
    {
      "iconName": "search",
      "linkName": "Survelliance"
    },
    {
      "iconName": "person",
      "linkName": "Employee"
    }, {
      "iconName": "bar_chart",
      "linkName": "Work Comp"
    },
    {
      "iconName": "insert_drive_file",
      "linkName": "Dashboard"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeActiveClass(index: any) {
    this.activeClass = index
  }


}
