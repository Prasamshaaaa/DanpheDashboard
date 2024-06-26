import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() SideNavStatus: boolean = false;
  SideNavList = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fas fa-tachometer-alt, fa-solid fa-table-columns',
      route: '/dashboard'
    },
  ];

}
