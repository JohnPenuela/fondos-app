import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListaTransacciones } from './tabla-lista-transacciones';

describe('TablaListaTransacciones', () => {
  let component: TablaListaTransacciones;
  let fixture: ComponentFixture<TablaListaTransacciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaListaTransacciones],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaListaTransacciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
