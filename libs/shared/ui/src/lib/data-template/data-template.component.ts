import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'generic-data-template',
  templateUrl: './data-template.component.html',
  styleUrls: ['./data-template.component.css']
})
export class DataTemplateComponent implements OnInit {
  @Input() public title: string;
  @Input() public api: string;
  constructor() { }

  ngOnInit(): void {
  }

}
