import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDashboardComponent } from './com-dashboard.component';

describe('ComDashboardComponent', () => {
  let component: ComDashboardComponent;
  let fixture: ComponentFixture<ComDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
