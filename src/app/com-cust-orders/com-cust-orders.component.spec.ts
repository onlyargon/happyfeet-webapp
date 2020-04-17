import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCustOrdersComponent } from './com-cust-orders.component';

describe('ComCustOrdersComponent', () => {
  let component: ComCustOrdersComponent;
  let fixture: ComponentFixture<ComCustOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComCustOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComCustOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
