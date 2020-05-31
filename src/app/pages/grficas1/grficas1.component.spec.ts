import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grficas1Component } from './grficas1.component';

describe('Grficas1Component', () => {
  let component: Grficas1Component;
  let fixture: ComponentFixture<Grficas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grficas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grficas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
