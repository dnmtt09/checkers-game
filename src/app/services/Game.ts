import { Injectable } from '@angular/core';
import { Player } from '../shared/classes/player';
import { Color } from '../shared/enum/enumPlayer';

@Injectable({ providedIn: 'root' })
export class Game {
  private chessboard: string[] = [];
  private isOdd: boolean = true;
  private readonly totalChess: number = 64;
  private human: Player | undefined = undefined;
  private PC: Player | undefined = undefined;

  constructor() {}

  private initializeChessboard(): void {
    for (let i = 0; i < this.totalChess; i++) {
      if (i % 8 === 0) {
        this.isOdd = !this.isOdd;
      }
      if (this.isOdd) {
        this.chessboard.push(i % 2 === 0 ? 'black' : 'white');
      } else {
        this.chessboard.push(i % 2 === 0 ? 'white' : 'black');
      }
    }
    console.log('valore della chessboard  ', this.chessboard);
  }

  initializePlayers(colorHuman: Color): void {
    this.human = {
      color: colorHuman,
      type: 'human',
      points: 0,
    };

    this.human = {
      color: colorHuman === 'red' ? 'blue' : 'red',
      type: 'pc',
      points: 0,
    };
    this.initializeChessboard();
  }

  getChessboard(): string[] {
    return this.chessboard;
  }
}
