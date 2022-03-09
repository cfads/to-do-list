import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'http://localhost:3000'

  constructor(public http:HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}/todo`)
  }

  deleteTask(task:Task): Observable<any> {
    return this.http.delete<any>(`${this.tasksUrl}/todo/${task.id}`)
  }

  doneTask(task:Task): Observable<Task> {
    return this.http.post<Task>(`${this.tasksUrl}/done`,task)
  }

}
