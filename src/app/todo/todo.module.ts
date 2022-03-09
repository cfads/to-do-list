import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';



@NgModule({
  declarations: [TodoComponent, TodoDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
