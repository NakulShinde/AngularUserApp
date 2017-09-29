import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
  	AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
