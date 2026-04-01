import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CANTIDAD_INICIAL } from '../../core/wallet.constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  @Input() cantidadInicial = 0;
}
