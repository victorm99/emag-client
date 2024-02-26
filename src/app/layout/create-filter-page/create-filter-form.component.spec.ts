import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilterFormComponent } from './create-filter-form.component';

describe('CreateFilterFormComponent', () => {
  let component: CreateFilterFormComponent;
  let fixture: ComponentFixture<CreateFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFilterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
