import dbSeed from '../assets/db.seed.json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Player } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class HttpService {
  private url: string = "api";
  constructor(private http: HttpClient) {}

  /** Retrieve all possible game items. */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/items`);
  }

  /** Retrieve all the shop items. */
  getShopItems(): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/shop`);
  }

  /** Retrieve all the cash shop items. */
  getCashShopItems(): Observable<number[]> {
    return this.http.get<number[]>(`${this.url}/cashShop`);
  }

  /** Retrieve all players stats. */
  getPlayerStats(): Observable<Player> {
    return this.http.get<Player>(`${this.url}/player`);
  }

  removePlayerItem(items): Observable<Player> {
    return this.http.patch<Player>(`${this.url}/player`, { items });
  }

  updatePlayerHealth(health): Observable<Player> {
    return this.http.patch<Player>(`${this.url}/player`, { health });
  }

  resetDb(): Observable<any> {
    console.log(dbSeed.shop);
    return this.http.post(`${this.url}/player`, dbSeed.player);
  }
}
