import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent{


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [

  ];

}
