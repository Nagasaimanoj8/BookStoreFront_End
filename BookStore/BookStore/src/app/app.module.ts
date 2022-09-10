import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookviewComponent } from './components/bookview/bookview.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GetallbooksComponent,
    DashboardComponent,
    BookviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,FormsModule,
    BrowserAnimationsModule,HttpClientModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,FlexLayoutModule,MatButtonModule,
    MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCheckboxModule,
    MatBadgeModule,MatMenuModule,MatSelectModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
