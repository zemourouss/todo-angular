import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  profile!: ProfileType;

  constructor(public itemService: ItemService, private http: HttpClient) { }

  ngOnInit() {
    this.itemService.filterItems()
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }


}
