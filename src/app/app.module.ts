import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { FormGroup, FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ProjectFormComponent } from './project-form/project-form.component';
import { appServices } from './app services';
import { AppservicesService } from './appservices.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    GridListComponent,
    ProjectFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ],
  providers: [
    AppservicesService],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
