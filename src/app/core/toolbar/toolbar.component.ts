import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent{

  @Input() title = '';
  @Input() color = '';
  @Input() menuItems: MenuItem [] = [];


}
