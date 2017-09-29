import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  plan: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  	getPlan(){
      this.plan = this.db.list('/classe') as FirebaseListObservable<any[]>;
      return this.plan;
  	}

  

}
