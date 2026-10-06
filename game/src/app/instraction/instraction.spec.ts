import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instraction } from './instraction';

describe('Instraction', () => {
  let component: Instraction;
  let fixture: ComponentFixture<Instraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instraction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instraction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
