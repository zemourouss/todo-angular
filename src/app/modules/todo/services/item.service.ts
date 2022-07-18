import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items!: Item[];

  allItems: Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  constructor() { }

  filterItems(qry: string = "") {
    this.items = this.allItems
      .filter((item: Item) =>
        item.description.toLowerCase()
          .includes(qry.toLowerCase()))
  }

  addItem(description: string) {
    this.allItems = [
      {
        description,
        done: false
      }
    ]
  }

  remove(index: number) {
    this.allItems = this.allItems.filter((_, i) => i !== index);
  }
}
