import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav(form_name){
	  	const navigationExtras: NavigationExtras = {
			queryParams: {'form_name': form_name},
		};
		console.log(navigationExtras);
		this.router.navigate(['/cru-buttons'], navigationExtras);
  }

}
