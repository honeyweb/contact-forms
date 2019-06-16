import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

declare let $:any;
declare let app_register_sw:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    app_register_sw.service_worker = "http://localhost:4200/assets/js/service-worker.js";
    app_register_sw.save_subscription_url = "http://localhost:8003/api/10";
    app_register_sw.execute();
  }

  nav(form_name){
	  const navigationExtras: NavigationExtras = {
			queryParams: {'form_name': form_name},
		};
		this.router.navigate(['/cru-buttons'], navigationExtras);
  }

}
