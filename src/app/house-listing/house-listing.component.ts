import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { environment as env } from '../../environments/environment';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {

	serial_no:number;
	pin = "";
  obj = {};
  images = [];
  attachments = [];
  e = {};

  constructor(private http:CRUDService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
        this.serial_no= params['serial_no'];
        this.pin= params['pin'];
        this.openForm();
    });
  }

  nav(form_name){
	  const navigationExtras: NavigationExtras = {
			queryParams: {'form_name': form_name},
		};
		this.router.navigate(['/cru-buttons'], navigationExtras);
  }

  openForm(){
    this.http.url = env.baseUrl + '6/'+ this.serial_no +'?table=house_listing';
    this.http.getObj().subscribe((res) => {
      this.obj = res;
      if(res['images']){
        this.images = res['images'].split(', ');
      }
      if(res['attachments']){
        this.attachments = JSON.parse(res['attachments']);
      }
    });
  }

  saveDraft(){
    this.obj['attachments'] = JSON.stringify(this.obj['attachments']);
    this.obj['_method'] = 'put';
    console.log(this.obj);
    this.http.url = env.baseUrl + '7/' + this.serial_no + '?table=house_listing';
    this.http.updateObj(this.obj).subscribe((data) => {
      console.log(data);
      if(data['errors'] instanceof Object){
        this.e = data['errors'];
      }
    });
  }

  imageFiles(event){
    const files: File[] = event.target.files;
    this.http.url = env.baseUrl + '8';
    this.http.uploadFiles(files).subscribe( (res) => {
      this.images = res['data'].map(a => a.path);
      this.obj['images'] = this.images.join(", ");
    });
  }

  attachFiles(event){
    const files: File[] = event.target.files;
    this.http.url = env.baseUrl + '8';
    this.http.uploadFiles(files).subscribe( (res) => {
      this.attachments = res['data'];
      this.obj['attachments'] = this.attachments;
    });
  }

}
