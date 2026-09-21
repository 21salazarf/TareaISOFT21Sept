import { Component, inject, input } from '@angular/core';
import { ColorService, Rgb } from '../color.service';

@Component({
  imports: [],
  selector: 'app-componente-b',
  styleUrl: './componente-b.css',
  templateUrl: './componente-b.html',
})
export class ComponenteB {
  protected readonly color = inject(ColorService);

  readonly channel = input.required<keyof Rgb>();
  readonly label = input.required<string>();

  onInput(inp: HTMLInputElement): void {
    if (inp.value === '') {
      this.color.setChannel(this.channel(), 0);
      return;
    }
    const n = Number(inp.value);
    if (!Number.isFinite(n)) return;
    this.color.setChannel(this.channel(), n);
    inp.value = String(this.color.rgb()[this.channel()]);
  }
}