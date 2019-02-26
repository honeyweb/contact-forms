import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHuntingComponent } from './house-hunting.component';

describe('HouseHuntingComponent', () => {
  let component: HouseHuntingComponent;
  let fixture: ComponentFixture<HouseHuntingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseHuntingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
