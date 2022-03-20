import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DoneService {

  private doneUrl = 'http://localhost:3000'

  constructor(public http:HttpClient) { }

  getDone(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.doneUrl}/done`);
  }

}
