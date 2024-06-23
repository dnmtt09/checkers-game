import { CommonModule, NgFor } from '@angular/common';
import {Component, EventEmitter, Output} from '@angular/core';

enum playerColor {
  red= "red",
  blue="blue"
}

@Component({
  selector: 'app-player-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-color.component.html',
  styleUrl: './player-color.component.scss',
})
export class PlayerColorComponent {
  colorsAvailable: Record<string, string> = {};
  readonly pC = playerColor;
  @Output() colorChoose: EventEmitter<playerColor> = new EventEmitter<playerColor>();

  constructor() {
    this.colorsAvailable = {
      color1: 'red',
      image1: '/assets/img/red-flag.jpeg',
      color2: 'blue',
      image2: './assets/img/blue-flag.jpeg',
    };
  }

  choosePlayerColor(playerColor: playerColor): void {
    this.colorChoose.emit(playerColor);
  }

}
