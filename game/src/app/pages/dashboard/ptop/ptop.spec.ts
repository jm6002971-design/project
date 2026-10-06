import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptop } from './ptop';

describe('Ptop', () => {
  let component: Ptop;
  let fixture: ComponentFixture<Ptop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ptop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
