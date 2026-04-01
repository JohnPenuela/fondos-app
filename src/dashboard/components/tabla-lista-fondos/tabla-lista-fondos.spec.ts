import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListaFondos } from './tabla-lista-fondos';

describe('TablaListaFondos', () => {
  let component: TablaListaFondos;
  let fixture: ComponentFixture<TablaListaFondos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaListaFondos],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaListaFondos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
