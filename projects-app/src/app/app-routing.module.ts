import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { FunctionalityCreateComponent } from './functionality-create/functionality-create.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { FunctionalityEditComponent } from './functionality-edit/functionality-edit.component';



const routes: Routes = [
  {
    path: "functionality/list", component: FunctionalityListComponent,
   },
  {
    path:"functionality/create",component:FunctionalityCreateComponent,
  },
  {
    path: "functionality/edit", component: FunctionalityEditComponent,
   },
   {
    path: "task/list", component: TaskListComponent,
   },
  {
    path:"task/create",component:TaskCreateComponent,
  },
  {
    path: "task/edit", component: TaskEditComponent,
   },


  {path:"",redirectTo:"functionality/list", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
