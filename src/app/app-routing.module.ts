import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'/todo', pathMatch:'full'
  },
  {
    path:'todo',
    loadChildren: () => import('./todo/todo.module')
                        .then((m) => m.TodoModule )
  },
  {
    path:'done',
    loadChildren: () => import('./done/done.module')
                        .then((m) => m.DoneModule )
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
