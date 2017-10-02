import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {

  mondayClasses: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

  	this.firebaseService.getMondayPlan().subscribe(plan => {
  		this.mondayClasses = plan;
  	})
  }

}
