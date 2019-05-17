import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./models";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  private url: string = "localhost:3000";
  constructor(private http: HttpClient) {}

  /** Load all possible game items. */
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }
}
