import { Component, OnInit } from "@angular/core";

import { ItemService } from "../item.service";
import { NewsList } from "../models/newsList";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  list!: any[];
  singleList!: any;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItem().subscribe(value => (this.list = value));
  }

  getInfoDetail(item: any): void {
    this.singleList = item;
  }
}
