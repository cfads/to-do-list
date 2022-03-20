import { Location } from '@angular/common';
import { Component, Input , OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  task!:Task;
  isEditing = false;

  form = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private fb: FormBuilder,
    private taskService:TaskService,
    private location: Location,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  goBack(): void {
    this.location.back();
  }

  getTask(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if(param !== 'new'){
      this.isEditing = true;

      const id = Number(param);
      this.taskService.getTask(id).subscribe(task =>{
        this.task = task
        this.form.controls['name'].setValue(task.task);
      })
    }
  }

  create(): void {
    const { valid, value } = this.form;

    if(valid){
      const task:Task = {
        task: value.name
      } as Task;
      this.taskService.addTask(task).subscribe(()=>this.goBack());
    }

  }

  update(): void {

    const { valid, value } = this.form;

    if(valid){
      const task:Task = {
        id: this.task.id,
        task: value.name
      }
      this.taskService.editTask(task).subscribe(()=>this.goBack());
    }
  }

}
