import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountCardComponent } from './my-account-card.component';

describe('MyAccountCardComponent', () => {
  let component: MyAccountCardComponent;
  let fixture: ComponentFixture<MyAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
