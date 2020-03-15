import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = "World Bank API";
  constructor() { }

  ngOnInit(): void {
  }

}
