import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { environment as env } from '../../environments/environment';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-job-hunting',
  templateUrl: './job-hunting.component.html',
  styleUrls: ['./job-hunting.component.css']
})
export class JobHuntingComponent implements OnInit {

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

  openForm(){
    let body = {};
    body['table'] = 'job_hunting';
    body['filter'] = 'where,spin,=,' + this.pin;
    this.http.url = env.baseUrl + '6/' + this.serial_no;
    this.http.getObj().subscribe((res) => {
      if(res['status'] == 'success'){
        this.obj = res['data'];
        if(this.obj['images']){
          this.images = this.obj['images'].split(', ');
        }
        if(this.obj['attachments']){
          this.attachments = JSON.parse(this.obj['attachments']);
        }
      }else{
        this.nav('job_hunting', res['error']);
      }
    });
  }

  nav(form_name, err = null){
    const navigationExtras: NavigationExtras = {
      queryParams: {'form_name': form_name, 'serial_no':this.serial_no, 'pin':this.pin, 'err':err},
    };
    this.router.navigate(['/cru-buttons'], navigationExtras);
  }

  saveDraft(){
    this.obj['attachments'] = JSON.stringify(this.obj['attachments']);
    this.obj['_method'] = 'put';
    console.log(this.obj);
    this.http.url = env.baseUrl + '7/' + this.serial_no + '?table=job_hunting';
    this.http.updateObj(this.obj).subscribe((res) => {
      if(res['status'] == 'success'){
        this.e = {};
        if(res['data']['errors'] instanceof Object){
          this.e = res['data']['errors'];
        }
      }else{
        console.log(res['error']);
      }
    });
  }

  imageFiles(event){
    const files: File[] = event.target.files;
    this.http.url = env.baseUrl + '8';
    this.http.uploadFiles(files).subscribe( (res) => {
      if(res['status'] == 'success'){
        this.images = res['data'].map(a => a.path);
        this.obj['images'] = this.images.join(", ");
      }else{
        console.log(res['error']);
      }
    });
  }

  attachFiles(event){
    const files: File[] = event.target.files;
    this.http.url = env.baseUrl + '8';
    this.http.uploadFiles(files).subscribe( (res) => {
      if(res['status'] == 'success'){
        this.attachments = res['data'];
        this.obj['attachments'] = this.attachments;
      }else{
        console.log(res['error']);
      }
    });
  }

}
