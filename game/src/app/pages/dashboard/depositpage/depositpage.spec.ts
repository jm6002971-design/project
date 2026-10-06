import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Depositpage } from './depositpage';

describe('Depositpage', () => {
  let component: Depositpage;
  let fixture: ComponentFixture<Depositpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Depositpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Depositpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
