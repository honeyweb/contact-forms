import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruButtonsComponent } from './cru-buttons.component';

describe('CruButtonsComponent', () => {
  let component: CruButtonsComponent;
  let fixture: ComponentFixture<CruButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
