import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHomeComponent } from './com-home.component';

describe('ComHomeComponent', () => {
  let component: ComHomeComponent;
  let fixture: ComponentFixture<ComHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
