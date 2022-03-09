import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';

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

  deleteTask(task:Task): void {
    this.taskService.deleteTask(task).subscribe(()=>this.getTasks());
  }

  doneTask(task:Task): void {
    this.taskService.doneTask(task).subscribe(()=>this.getTasks());
  }

}
