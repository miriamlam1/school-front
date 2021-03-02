import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminContactComponent } from './school-admin-contact.component';

describe('SchoolAdminContactComponent', () => {
  let component: SchoolAdminContactComponent;
  let fixture: ComponentFixture<SchoolAdminContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAdminContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdminContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
