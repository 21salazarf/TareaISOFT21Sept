import { Component, effect, inject, signal } from '@angular/core';
import { ColorService, parseHex } from '../color.service';

/** Componente A: campo hexadecimal + botón "show". */
@Component({
  imports: [],
  selector: 'app-componente-a',
  styleUrl: './componente-a.css',
  templateUrl: './componente-a.html',
})
export class ComponenteA {
  protected readonly color = inject(ColorService);
  protected readonly error = signal(false);

  constructor() {
    effect(() => {
      this.color.hex();
      this.error.set(false);
    });
  }

  show(input: HTMLInputElement): void {
    const rgb = parseHex(input.value);
    if (!rgb) {
      this.error.set(true);
      return;
    }
    this.error.set(false);
    this.color.setRgb(rgb);
    input.value = this.color.hex()
  }
}