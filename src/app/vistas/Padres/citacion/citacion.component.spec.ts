import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitacionComponent } from './citacion.component';

describe('CitacionComponent', () => {
  let component: CitacionComponent;
  let fixture: ComponentFixture<CitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
