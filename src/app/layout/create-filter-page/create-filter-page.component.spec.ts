import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilterPageComponent } from './create-filter-page.component';

describe('CreateFilterPageComponent', () => {
  let component: CreateFilterPageComponent;
  let fixture: ComponentFixture<CreateFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFilterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
