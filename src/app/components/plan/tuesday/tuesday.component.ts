import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {

  tuesdayClasses: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  	this.firebaseService.getTuesdayPlan().subscribe(plan => {
  		this.tuesdayClasses = plan;
  	})
  }

}
