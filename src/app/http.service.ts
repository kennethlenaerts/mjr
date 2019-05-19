import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item, Player } from "./models";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  private url: string = "api";
  constructor(private http: HttpClient) {}

  /** Load all possible game items. */
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  /** Load all players stats. */
  public getPlayerStats(): Observable<Player> {
    return this.http.get<Player>(`${this.url}/player`);
  }
}
