import { Component, OnInit } from '@angular/core';
import { Task } from '../core/models/task.model';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit{

  displayedColumns: string[] = ['task','edit','remove','done'];
  tasks:Task [] = [];

  constructor(public taskService:TaskService){}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(r=>this.tasks = r);
  }

}
