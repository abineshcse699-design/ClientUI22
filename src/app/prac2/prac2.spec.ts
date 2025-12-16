import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac2 } from './prac2';

describe('Prac2', () => {
  let component: Prac2;
  let fixture: ComponentFixture<Prac2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prac2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
