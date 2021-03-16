import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationComponent } from './permutation.component';

describe('PermutationComponent', () => {
  let component: PermutationComponent;
  let fixture: ComponentFixture<PermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
