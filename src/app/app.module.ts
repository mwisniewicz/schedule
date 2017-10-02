import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { DeleteClassComponent } from './components/delete-class/delete-class.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//FORMS
import { FormsModule } from '@angular/forms';

//ROUTES
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './components/classe/classe.component';

//MATERIAL DESIGN MODULES

import { MdButtonModule } from '@angular/material';

// FIREBASE CONFIGURATION

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// SERVICE

import { FirebaseService } from "./services/firebase.service";
import { MondayComponent } from './components/plan/monday/monday.component';
import { TuesdayComponent } from './components/plan/tuesday/tuesday.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'plan', component:PlanComponent},
  {path:'monday', component:MondayComponent},
  {path:'tuesday', component:TuesdayComponent},
  {path:'classe/:id', component:ClasseComponent},
  {path:'add-class', component:AddClassComponent},
  {path:'edit-class/:id', component:EditClassComponent},
]

export const firebaseConfig = {
    apiKey: "AIzaSyBqkK4SP7ihcccaM3NJhxgEO8ZYAzJdME0",
    authDomain: "schedule-a61ac.firebaseapp.com",
    databaseURL: "https://schedule-a61ac.firebaseio.com",
    projectId: "schedule-a61ac",
    storageBucket: "schedule-a61ac.appspot.com",
    messagingSenderId: "834339551353"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanComponent,
    AddClassComponent,
    EditClassComponent,
    DeleteClassComponent,
    NavbarComponent,
    FooterComponent,
    ClasseComponent,
    MondayComponent,
    TuesdayComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MdButtonModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
