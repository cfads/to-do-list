import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path:'', component: TodoComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
