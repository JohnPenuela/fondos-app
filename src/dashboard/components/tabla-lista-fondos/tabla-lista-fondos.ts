import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {
  RegistrarSuscripcionDialog,
} from '../registrar-suscripcion-dialog/registrar-suscripcion-dialog';
import { FondoModel } from '../../../shared/models/Fondo/fondo.model';

@Component({
  selector: 'app-tabla-lista-fondos',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RegistrarSuscripcionDialog],
  providers: [MessageService],
  templateUrl: './tabla-lista-fondos.html',
  styleUrls: ['./tabla-lista-fondos.css'],
})
export class TablaListaFondos {
  @Output() onSuscripcionConfirmada = new EventEmitter();
  @Input() fondos: any;

  readonly dialogVisible = signal(false);
  readonly fondoSeleccionado = signal<FondoModel | null>(null);

  abrirRegistroSuscripcion(fondo: FondoModel): void {
    this.fondoSeleccionado.set(fondo);
    this.dialogVisible.set(true);
  }

  onDialogVisibleChange(open: boolean): void {
    this.dialogVisible.set(open);
    if (!open) {
      this.fondoSeleccionado.set(null);
    }
  }
}
