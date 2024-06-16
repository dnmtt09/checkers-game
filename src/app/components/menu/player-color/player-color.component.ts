import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-player-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-color.component.html',
  styleUrl: './player-color.component.scss',
})
export class PlayerColorComponent {
  colorsAvailable: Record<string, string> = {};

  constructor() {
    this.colorsAvailable = {
      color1: 'red',
      image1: '/assets/img/red-flag.jpeg',
      color2: 'blue',
      image2: './assets/img/blue-flag.jpeg',
    };
  }
}
