import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  allClasses: any;

  constructor(private firebaseService: FirebaseService) { 

    }


  ngOnInit() {

  	this.firebaseService.getPlan().subscribe(plan => {
  		this.allClasses = plan;
  	})
  }

}
