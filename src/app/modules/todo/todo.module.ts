import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemComponent,
    AddItemComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  exports: [AddItemComponent]
})
export class TodoModule { }
