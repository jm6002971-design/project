import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casinohistory } from './casinohistory';

describe('Casinohistory', () => {
  let component: Casinohistory;
  let fixture: ComponentFixture<Casinohistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Casinohistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Casinohistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
