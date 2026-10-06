import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokerhistory } from './pokerhistory';

describe('Pokerhistory', () => {
  let component: Pokerhistory;
  let fixture: ComponentFixture<Pokerhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokerhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokerhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
