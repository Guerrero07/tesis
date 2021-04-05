import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePendienteComponent } from './detalle-pendiente.component';

describe('DetallePendienteComponent', () => {
  let component: DetallePendienteComponent;
  let fixture: ComponentFixture<DetallePendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
