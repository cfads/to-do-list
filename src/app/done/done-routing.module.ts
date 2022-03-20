import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './done.component';

const routes:Routes = [
  { path:'', component: DoneComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DoneRoutingModule { }
