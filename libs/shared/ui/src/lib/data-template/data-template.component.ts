import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'generic-data-template',
  templateUrl: './data-template.component.html',
  styleUrls: ['./data-template.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DataTemplateComponent implements OnInit {
  @Input() public title: string;
  @Input() public api: string;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
