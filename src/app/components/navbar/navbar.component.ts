import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AngularFireAuth]
})
export class NavbarComponent implements OnInit {

  constructor(
  	public afAuth: AngularFireAuth,
  	public flashMessage:FlashMessagesService
  	) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
  }

}
