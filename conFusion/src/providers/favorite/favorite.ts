import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorite : Array<any>;

  constructor(public http: HttpClient) {
    console.log('Hello FavoriteProvider Provider');
    this.favorite = [];
  }

  addFavorite(id : number): boolean {
    this.favorite.push(id);
    return true;
  }

  isFavorite(id : number): boolean {
    return this.favorite.some(el => el===id);
  }
}
