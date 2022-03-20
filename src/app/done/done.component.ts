import { Component, OnInit } from '@angular/core';
import { Task } from '../core/models/task.model';
import { DoneService } from '../core/services/done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  displayedColumns: string[] = ['task'];
  done:Task [] = [];

  constructor(public doneService:DoneService) { }

  ngOnInit(): void {
    this.getDone();
  }

  getDone(): void {
    this.doneService.getDone().subscribe(done=>this.done = done);
  }

}
