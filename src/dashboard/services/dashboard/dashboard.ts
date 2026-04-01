import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FondoModel } from '../../../shared/models/Fondo/fondo.model';

const FONDOS_DEMO: FondoModel[] = [
  {
    id: 1,
    nombre: 'FPV_BTG_PACTUAL_RECAUDADORA',
    montoMinimo: 75000,
    categoria: 'FPV',
  },
  {
    id: 2,
    nombre: 'FPV_BTG_PACTUAL_ECOPETROL',
    montoMinimo: 125000,
    categoria: 'FPV',
  },
  {
    id: 3,
    nombre: 'DEUDAPRIVADA',
    montoMinimo: 50000,
    categoria: 'FIC',
  },
  {
    id: 4,
    nombre: 'FDO-ACCIONES',
    montoMinimo: 250000,
    categoria: 'FIC',
  },
  {
    id: 5,
    nombre: 'FPV_BTG_PACTUAL_DINAMICA',
    montoMinimo: 100000,
    categoria: 'FPV',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  getListaFondos(): Observable<FondoModel[]> {
    return of([...FONDOS_DEMO]);
  }

}
