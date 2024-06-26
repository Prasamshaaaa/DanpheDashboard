import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavToggled = new EventEmitter<boolean>();
  MenuStatus: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  SideNavToggle() {
    this.MenuStatus = !this.MenuStatus;
    this.SideNavToggled.emit(this.MenuStatus);
  }
}
