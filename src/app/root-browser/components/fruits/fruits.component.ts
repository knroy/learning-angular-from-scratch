import { Component, OnInit } from '@angular/core';
import { Fruit } from "../../models/fruit.model";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[] = [
    new Fruit("Banana"),
    new Fruit("Pineapple"),
    new Fruit("Jackfruit"),
    new Fruit("Apple")
  ];

  fruit_list: string[] = ['Apple', 'Banana'];

  constructor() {
  }

  ngOnInit(): void {

  }

}
