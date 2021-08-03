import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewsList } from "./models/newsList";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  url = "https://www.haultail.com/wp-json/haultail_news/v1/posts/10/0";
  constructor(private httpClient: HttpClient) {}
  getItem(): Observable<NewsList[]> {
    return this.httpClient.get<NewsList[]>(this.url);
  }
}
