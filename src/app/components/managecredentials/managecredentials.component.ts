import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecredentials',
  templateUrl: './managecredentials.component.html',
  styleUrls: ['./managecredentials.component.css']
})
export class ManagecredentialsComponent implements OnInit, OnDestroy {



  ngOnInit(): void {
  }

  mobileQuery: MediaQueryList;

  menuItems = [
    {
      displayName: 'Personal Information',
      path: '/managecredentials/personal-info',
      icon: ''
    },
    {
      displayName: 'Work Experience',
      path: '',
      icon: ''
    },
    {
      displayName: 'Medical Mal Practice',
      path: '',
      icon: ''
    },
    {
      displayName: 'Peer References',
      path: '',
      icon: ''
    },
    {
      displayName: 'Licensure',
      path: '',
      icon: ''
    },
    {
      displayName: 'Payor\'s Information',
      path: '',
      icon: ''
    },
    {
      displayName: 'CME',
      path: '',
      icon: ''
    },
    {
      displayName: 'Documents',
      path: '',
      icon: ''
    },
    {
      displayName: 'Summary',
      path: '',
      icon: ''
    }
  ]

  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
