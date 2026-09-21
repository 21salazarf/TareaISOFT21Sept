import { Component, inject } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  imports: [],
  selector: 'app-componente-c',
  styleUrl: './componente-c.css',
  templateUrl: './componente-c.html',
})
export class ComponenteC {
  protected readonly color = inject(ColorService);
}