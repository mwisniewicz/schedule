import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  plan: FirebaseListObservable<any[]>;
  classe: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  	getPlan(){
      this.plan = this.db.list('/plan/wtorek') as FirebaseListObservable<Plan[]>;
      return this.plan;
  	}

    getClasseDetails(id){
      this.classe = this.db.object('plan/poniedzialek/'+id) as FirebaseObjectObservable<Plan>;
      return this.classe;
    }

  	getMondayPlan(){
      this.plan = this.db.list('/plan/poniedzialek') as FirebaseListObservable<Plan[]>;
      return this.plan;
  	}

  	getTuesdayPlan(){
      this.plan = this.db.list('/plan/wtorek') as FirebaseListObservable<Plan[]>;
      return this.plan;
  	}



}

interface Plan {
  $key?:string;
  name?: string;
  supervisor?: string;
}