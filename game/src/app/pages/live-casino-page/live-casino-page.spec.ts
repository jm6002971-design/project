import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCasinoPage } from './live-casino-page';

describe('LiveCasinoPage', () => {
  let component: LiveCasinoPage;
  let fixture: ComponentFixture<LiveCasinoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCasinoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveCasinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
