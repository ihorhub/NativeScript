import { Component, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsList } from "../models/newsList";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "ns-details",
  templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
  @Input()
  item: any;
  @Output()
  getInfo = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  getDetailInfo(item: any): void {
    this.getInfo.emit(item);
  }
}
