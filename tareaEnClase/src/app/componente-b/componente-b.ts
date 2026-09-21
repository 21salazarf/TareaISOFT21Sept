import { Component, inject } from '@angular/core';
import { ColorService, Rgb } from '../color.service';

@Component({
  imports: [],
  selector: 'app-componente-b',
  styleUrl: './componente-b.css',
  templateUrl: './componente-b.html',
})
export class ComponenteB {
  protected readonly color = inject(ColorService);
  protected readonly channels: { key: keyof Rgb; label: string }[] = [
    { key: 'r', label: 'Rojo' },
    { key: 'g', label: 'Verde' },
    { key: 'b', label: 'Azul' },
  ];

  onInput(channel: keyof Rgb, input: HTMLInputElement): void {
    if (input.value === '') {
      this.color.setChannel(channel, 0);
      return;
    }
    const n = Number(input.value);
    if (!Number.isFinite(n)) return;
    this.color.setChannel(channel, n);
    input.value = String(this.color.rgb()[channel]); // muestra el valor ya limitado a 0–255
  }
}