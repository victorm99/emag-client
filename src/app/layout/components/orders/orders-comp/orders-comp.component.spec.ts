import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCompComponent } from './orders-comp.component';

describe('OrdersCompComponent', () => {
  let component: OrdersCompComponent;
  let fixture: ComponentFixture<OrdersCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
