import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item, Player, CashShopItem } from "./models";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  private url: string = "api";
  constructor(private http: HttpClient) {}

  /** Retrieve all possible game items. */
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  /** Retrieve all the shop items. */
  public getShopItems(): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/shop`);
  }

  /** Retrieve all the cash shop items. */
  public getCashShopItems(): Observable<CashShopItem[]> {
    return this.http.get<CashShopItem[]>(`${this.url}/cashShop`);
  }

  /** Retrieve all players stats. */
  public getPlayerStats(): Observable<Player> {
    return this.http.get<Player>(`${this.url}/player`);
  }
}
