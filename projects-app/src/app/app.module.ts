import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { FunctionalityCreateComponent } from './functionality-create/functionality-create.component';
import { FunctionalityEditComponent } from './functionality-edit/functionality-edit.component';
import { FunctionalityReadComponent } from './functionality-read/functionality-read.component';
import { FunctionalityDeleteComponent } from './functionality-delete/functionality-delete.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskReadComponent } from './task-read/task-read.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalityListComponent,
    FunctionalityCreateComponent,
    FunctionalityEditComponent,
    FunctionalityReadComponent,
    FunctionalityDeleteComponent,
    TaskListComponent,
    TaskReadComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskCreateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
