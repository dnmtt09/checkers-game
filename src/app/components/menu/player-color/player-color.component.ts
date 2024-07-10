import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from '../../../shared/enum/enumPlayer';

enum playerColor {
  red = 'red',
  blue = 'blue',
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
  isClicked: Color | undefined = undefined; // rename the variable name
  @Output() colorChoose: EventEmitter<Color> = new EventEmitter<Color>();

  constructor() {
    this.colorsAvailable = {
      color1: 'rosso',
      image1: '/assets/img/red-flag.jpeg',
      color2: 'blu',
      image2: './assets/img/blue-flag.jpeg',
    };
  }
  choosePlayerColor(playerColor: playerColor): void {
    this.isClicked = playerColor;
  }

  confirm(): void {
    if (this.isClicked !== undefined) {
      this.colorChoose.emit(this.isClicked);
    }
  }

  protected readonly playerColor = playerColor;
}
