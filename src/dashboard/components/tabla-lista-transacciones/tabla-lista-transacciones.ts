import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { RegistrarSuscripcionDialog } from '../registrar-suscripcion-dialog/registrar-suscripcion-dialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabla-lista-transacciones',
  imports: [CurrencyPipe, PrimeTemplate, TableModule, Button],
  templateUrl: './tabla-lista-transacciones.html',
  styleUrl: './tabla-lista-transacciones.css',
})
export class TablaListaTransacciones {
  @Input() transacciones: any;
  @Output() eliminarSuscripciones = new EventEmitter();
}
