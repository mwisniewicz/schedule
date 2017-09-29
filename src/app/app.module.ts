import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// SERVICE

import { FirebaseService } from "./services/firebase.service";

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'plan', component:PlanComponent},
  {path:'classe/:id', component:ClasseComponent},
  {path:'add-class', component:AddClassComponent},
  {path:'edit-class/:id', component:EditClassComponent},
]

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
    ClasseComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MdButtonModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
