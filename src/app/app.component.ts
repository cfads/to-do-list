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
      icon: "listed",
      routerLink: "/todo",
      toolTipText: "To Do"
    },
    {
      icon: "verified",
      routerLink: "/done",
      toolTipText: "Done"
    }
  ]
}
