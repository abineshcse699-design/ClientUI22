import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Ngmain } from "./ngmain/ngmain";
import { Prac2 } from "./prac2/prac2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prac2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tailwind');
}
