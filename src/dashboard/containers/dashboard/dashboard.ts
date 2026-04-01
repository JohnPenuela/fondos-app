import { Component, inject, OnInit } from '@angular/core';
import { components } from '../../components';
import { SuscripcionConfirmada } from '../../components';
import { MessageService } from 'primeng/api';
import { DashboardService,  } from '../../services/dashboard/dashboard';
import { CANTIDAD_INICIAL } from '../../../app/core/wallet.constants';
import { AppHeader } from '../../../app/layout/app-header/app-header';
import { Toast } from 'primeng/toast';
import { TransaccionModel } from '../../../shared/models/Transaccion/transaccion.model';
import { FondoModel } from '../../../shared/models/Fondo/fondo.model';

@Component({
  selector: 'app-dashboard',
  imports: [components, AppHeader, Toast],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  providers: [MessageService],
})
export class Dashboard implements OnInit {
  private readonly dashboardService = inject(DashboardService);
  private readonly messageService = inject(MessageService);

  cantidadActual = CANTIDAD_INICIAL;
  transacciones: TransaccionModel[] = [];
  fondos: FondoModel[] = [];

  ngOnInit(): void {
    this.dashboardService.getListaFondos().subscribe((data) => {
      this.fondos = data;
    });
  }

  onSuscripcionConfirmada(event: SuscripcionConfirmada): void {
    const monto = event.fondo.montoMinimo;

    if (this.cantidadActual < monto) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Alerta',
        detail: `La suscripción a ${event.fondo.nombre} supera la cantidad disponible (${this.cantidadActual} COP)`,
      });
      return;
    }

    this.cantidadActual -= monto;

    this.transacciones.push({
      id: this.transacciones.length + 1,
      nombre: event.fondo.nombre,
      monto,
      fecha: new Date().toLocaleString('es-CO'),
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Transacción exitosa',
      detail: `Se ha suscrito a ${event.fondo.nombre} por ${monto} COP`,
    });

    console.info(
      'Suscripción confirmada',
      event,
      'Cantidad restante:',
      this.cantidadActual,
      ' COP',
    );
    console.table(this.transacciones);
  }

  onEliminarSuscripcion(transaccion: TransaccionModel): void {
    debugger;
    const monto = this.cantidadActual;

    this.cantidadActual += transaccion.monto;

    const index = this.transacciones.findIndex((t) => t.id === transaccion.id);

    if (index !== -1) {
      this.transacciones.splice(index, 1);
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Desuscripción exitosa',
      detail: `Se ha eliminado la suscripción a ${transaccion.nombre} por ${monto} COP`,
    });

    console.table(this.transacciones);
  }
}
