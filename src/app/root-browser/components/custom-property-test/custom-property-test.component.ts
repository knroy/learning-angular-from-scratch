import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-property-test',
  templateUrl: './custom-property-test.component.html',
  styleUrls: ['./custom-property-test.component.scss']
})
export class CustomPropertyTestComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
