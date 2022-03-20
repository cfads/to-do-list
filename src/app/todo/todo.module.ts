import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoComponent, TodoDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
