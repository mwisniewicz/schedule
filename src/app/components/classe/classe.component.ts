import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  id: any;
  classe: any;

  constructor(
  	private firebaseService: FirebaseService,
  	private router: Router,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  	// GET NAME
  	this.id = this.route.snapshot.params.id;
  	this.firebaseService.getClasseDetails(this.id).subscribe(classe => {
  		this.classe = classe;
  		console.log(classe);
  	})	
  }

}
