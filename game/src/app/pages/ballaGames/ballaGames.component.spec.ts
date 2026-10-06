/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallaGamesComponent } from './ballaGames.component';

describe('BallaGamesComponent', () => {
  let component: BallaGamesComponent;
  let fixture: ComponentFixture<BallaGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallaGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
