import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountComponentComponent } from './discount-component.component';

describe('DiscountComponentComponent', () => {
  let component: DiscountComponentComponent;
  let fixture: ComponentFixture<DiscountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
