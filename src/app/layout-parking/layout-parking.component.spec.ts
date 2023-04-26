import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutParkingComponent } from './layout-parking.component';

describe('LayoutParkingComponent', () => {
  let component: LayoutParkingComponent;
  let fixture: ComponentFixture<LayoutParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
