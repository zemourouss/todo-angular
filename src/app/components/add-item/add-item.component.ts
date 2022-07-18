import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  @Input() newItem: string = "";
  @Output() addItem = new EventEmitter();
}
