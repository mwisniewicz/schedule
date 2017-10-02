import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  plan: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  	getPlan(){
      this.plan = this.db.list('/plan/wtorek') as FirebaseListObservable<any[]>;
      return this.plan;
  	}

  	getMondayPlan(){
      this.plan = this.db.list('/plan/poniedzialek') as FirebaseListObservable<any[]>;
      return this.plan;
  	}

  	getTuesdayPlan(){
      this.plan = this.db.list('/plan/wtorek') as FirebaseListObservable<any[]>;
      return this.plan;
  	}

}
