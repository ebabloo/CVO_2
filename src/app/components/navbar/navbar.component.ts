import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activeClass = 0

  navLinks = [
    {
      "iconName": "tv",
      "linkName": "Dashboard"
    },
    {
      "iconName": "insert_drive_file",
      "linkName": "Manage Credentials"
    },
    {
      "iconName": "search",
      "linkName": "Survelliance"
    },
    {
      "iconName": "person",
      "linkName": "Physicians"
    }, {
      "iconName": "bar_chart",
      "linkName": "Work Comp"
    },
    {
      "iconName": "insert_drive_file",
      "linkName": "Dashboard"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    const activeClassNav = localStorage.getItem("activeClassIndex")
    if (activeClassNav) {
      this.activeClass = parseInt(activeClassNav)
    }
  }

  changeActiveClass(index: any) {
    console.log(index);
    this.activeClass = index;
    localStorage.setItem("activeClassIndex", index)

    switch (index) {
      case 0:
        this.router.navigate(['/physician'])
        break;

        case 1:
        this.router.navigate(['/managecredentials'])
        break;

      case 3:
        this.router.navigate(['/employees'])
        break;

        default:
          this.router.navigate(['/physician'])
    }

    // if (index === 3) {
    //   this.router.navigate(['/employees'])
    // }
    // else if (index === 0) {
    //   this.router.navigate(['/physician'])
    // }

  }

}
