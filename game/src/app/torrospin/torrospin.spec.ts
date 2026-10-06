import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torrospin } from './torrospin';

describe('Torrospin', () => {
  let component: Torrospin;
  let fixture: ComponentFixture<Torrospin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Torrospin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Torrospin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
