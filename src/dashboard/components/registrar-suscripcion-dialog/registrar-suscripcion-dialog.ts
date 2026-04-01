import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { Dialog } from 'primeng/dialog';
import { RadioButton } from 'primeng/radiobutton';
import { PrimeTemplate } from 'primeng/api';
import { FondoModel } from '../../../shared/models/Fondo/fondo.model';

export const METODOS_NOTIFICACION = ['email', 'sms'] as const;
export type MetodoNotificacion = (typeof METODOS_NOTIFICACION)[number];

export interface SuscripcionConfirmada {
  fondo: FondoModel;
  notificacion: MetodoNotificacion;
}

@Component({
  selector: 'app-registrar-suscripcion-dialog',
  imports: [Dialog, Button, Checkbox, RadioButton, FormsModule, PrimeTemplate],
  templateUrl: './registrar-suscripcion-dialog.html',
  styleUrl: './registrar-suscripcion-dialog.css',
})
export class RegistrarSuscripcionDialog {
  @Input() visible = false;
  @Input() fondo: FondoModel | null = null;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() confirmar = new EventEmitter<SuscripcionConfirmada>();

  confirmoTransaccion = false;
  metodoNotificacion: MetodoNotificacion = 'email';

  onVisibleChange(open: boolean): void {
    this.visible = open;
    this.visibleChange.emit(open);
    if (!open) {
      this.resetForm();
    }
  }

  cancelar(): void {
    this.onVisibleChange(false);
  }

  registrar(): void {
    if (!this.confirmoTransaccion || !this.fondo) {
      return;
    }

    this.confirmar.emit({
      fondo: this.fondo,
      notificacion: this.metodoNotificacion,
    });
    this.onVisibleChange(false);
  }

  private resetForm(): void {
    this.confirmoTransaccion = false;
    this.metodoNotificacion = 'email';
  }
}
