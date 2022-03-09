import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To Do List';
  menuItems:MenuItem[] = [
    {
      icon: "turned_in_not",
      routerLink: "/todo",
      toolTipText: "To Do"
    },
    {
      icon: "done",
      routerLink: "/done",
      toolTipText: "Done"
    }
  ]
}
