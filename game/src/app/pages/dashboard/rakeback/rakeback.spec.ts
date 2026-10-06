import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rakeback } from './rakeback';

describe('Rakeback', () => {
  let component: Rakeback;
  let fixture: ComponentFixture<Rakeback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rakeback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rakeback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
