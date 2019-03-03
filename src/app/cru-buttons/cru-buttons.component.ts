import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { environment as env } from '../../environments/environment';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-cru-buttons',
  templateUrl: './cru-buttons.component.html',
  styleUrls: ['./cru-buttons.component.css']
})
export class CruButtonsComponent implements OnInit {

	form_name:string;
	serial_no:number;
	pin = "";

  constructor(private http:CRUDService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
        this.form_name= params['form_name'];
    });
  }

  newForm(){
    this.http.url = env.baseUrl + '5?table=' + this.form_name;
    this.http.addObj({}).subscribe((res) => {
      this.serial_no = res['id'];
      this.nav();
    });
  }

  nav(){
    const navigationExtras: NavigationExtras = {
      queryParams: {'serial_no': this.serial_no, 'pin': this.pin},
    };
    this.router.navigate(['/'+this.form_name], navigationExtras);
  }

}
