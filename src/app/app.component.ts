import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  constructor(public itemService : ItemService) {}
  
  ngOnInit(): void {
    this.itemService.filterItems()
  }

}
