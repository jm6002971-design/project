import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashPage } from './crash-page';

describe('CrashPage', () => {
  let component: CrashPage;
  let fixture: ComponentFixture<CrashPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrashPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
