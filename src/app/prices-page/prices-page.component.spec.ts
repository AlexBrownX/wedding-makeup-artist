/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PricesPageComponent } from './prices-page.component';

describe('PricesPageComponent', () => {
  let component: PricesPageComponent;
  let fixture: ComponentFixture<PricesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
