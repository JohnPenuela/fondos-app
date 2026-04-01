import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getListaFondos should return 5 fondos', (done) => {
    service.getListaFondos().subscribe((fondos) => {
      expect(fondos.length).toBe(5);
      expect(fondos[0].id).toBe(1);
      expect(fondos[0].categoria).toBe('FPV');
      done();
    });
  });
});
