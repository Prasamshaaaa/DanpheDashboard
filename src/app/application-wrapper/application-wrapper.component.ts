import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-wrapper',
  templateUrl: './application-wrapper.component.html',
  styleUrls: ['./application-wrapper.component.css']
})
export class ApplicationWrapperComponent implements OnInit {
  SideNavStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
