import { Injectable } from '@angular/core';
import {Player} from "../shared/classes/player";

@Injectable({ providedIn: 'root' })
export class Game {
  private chessboard: string[] = [];
  private isOdd: boolean = true;
  private readonly totalChess: number = 64;
  private human: Player | undefined = undefined;
  private PC: Player | undefined = undefined;

  constructor() {
    this.initializeChessboard();
  }

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

  getChessboard(): string[] {
    return this.chessboard;
  }
}
