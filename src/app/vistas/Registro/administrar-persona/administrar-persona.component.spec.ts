import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPersonaComponent } from './administrar-persona.component';

describe('AdministrarPersonaComponent', () => {
  let component: AdministrarPersonaComponent;
  let fixture: ComponentFixture<AdministrarPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
