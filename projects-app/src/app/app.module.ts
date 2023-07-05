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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { FunctionalityService } from './services/functionality.service';
import { TaskService } from './services/task.service';

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
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule
  ],
  providers: [FunctionalityService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
