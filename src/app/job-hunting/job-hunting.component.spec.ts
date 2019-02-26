import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHuntingComponent } from './job-hunting.component';

describe('JobHuntingComponent', () => {
  let component: JobHuntingComponent;
  let fixture: ComponentFixture<JobHuntingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobHuntingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
