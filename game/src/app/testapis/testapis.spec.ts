import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testapis } from './testapis';

describe('Testapis', () => {
  let component: Testapis;
  let fixture: ComponentFixture<Testapis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testapis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testapis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
