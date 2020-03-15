import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generic-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer = "Made by Iván de Paz Delgado";
  constructor() { }

  ngOnInit(): void {
  }

}
