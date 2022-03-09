import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MaterialModule } from '../material/material/material.module';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
