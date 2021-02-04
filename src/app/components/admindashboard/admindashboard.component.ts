import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

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
