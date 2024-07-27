import { Injectable } from '@angular/core';
import { Player } from '../shared/classes/player';
import { Color } from '../shared/enum/enumPlayer';

@Injectable({ providedIn: 'root' })
export class GameService {
  private chessboard: string[] = [];
  private isOdd: boolean = true;
  private readonly totalChess: number = 64;
  private human: Player | null = null;
  private PC: Player | null = null;

  constructor() {}

  private initializeChessboard(): void {
    if (!!this.human && !!this.PC) {
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
      for (let i = 0; i < 8; i = i + 2) {
        /* TODO first PC */
        this.chessboard[i] = this.PC.color;
      }
      for (let i = 9; i < 16; i = i + 2) {
        /* TODO second PC */
        this.chessboard[i] = this.PC.color;
      }
      for (let i = 48; i < 56; i = i + 2) {
        /* TODO second HUMAN */
        this.chessboard[i] = this.human.color;
      }
      for (let i = 57; i < 64; i = i + 2) {
        /* TODO second HUMAN */
        this.chessboard[i] = this.human.color;
      }
    }
  }

  initializePlayers(colorHuman: Color): void {
    this.human = {
      color: colorHuman!,
      points: 0,
    };

    this.PC = {
      color: colorHuman! === 'red' ? 'blue' : 'red',
      points: 0,
    };
    this.initializeChessboard();
  }

  getChessboard(): string[] {
    return this.chessboard;
  }
}
