import { Injectable } from '@angular/core';
import { Player } from '../shared/classes/player';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  private chessboard: string[] = [];
  private isOdd: boolean = true;
  private readonly totalChess: number = 64;
  private human?: Player;
  private PC?: Player;

  constructor() {}

  initializeChessboard(PC: Player, human: Player): void {
    if (!!human && !!PC) {
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
        this.chessboard[i] = PC.color;
      }
      for (let i = 9; i < 16; i = i + 2) {
        /* TODO second PC */
        this.chessboard[i] = PC.color;
      }
      for (let i = 48; i < 56; i = i + 2) {
        /* TODO second HUMAN */
        this.chessboard[i] = human.color;
      }
      for (let i = 57; i < 64; i = i + 2) {
        /* TODO second HUMAN */
        this.chessboard[i] = human.color;
      }
    }
  }

  getChessboard(): string[] {
    return this.chessboard;
  }
}
