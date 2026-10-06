import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachinePage } from './slot-machine-page';

describe('SlotMachinePage', () => {
  let component: SlotMachinePage;
  let fixture: ComponentFixture<SlotMachinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotMachinePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
