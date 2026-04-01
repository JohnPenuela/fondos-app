import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSuscripcionDialog } from './registrar-suscripcion-dialog';

describe('RegistrarSuscripcionDialog', () => {
  let component: RegistrarSuscripcionDialog;
  let fixture: ComponentFixture<RegistrarSuscripcionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarSuscripcionDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarSuscripcionDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
