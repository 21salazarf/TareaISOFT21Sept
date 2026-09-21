import { Component } from '@angular/core';
import { ComponenteA } from './componente-a/componente-a';
import { ComponenteB } from './componente-b/componente-b';
import { ComponenteC } from './componente-c/componente-c';

@Component({
  selector: 'app-root',
  imports: [ComponenteA, ComponenteB, ComponenteC],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }