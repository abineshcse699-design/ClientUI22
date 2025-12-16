import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngmain } from './ngmain';

describe('Ngmain', () => {
  let component: Ngmain;
  let fixture: ComponentFixture<Ngmain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngmain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngmain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
