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
    const pcPieces = [0,2,4,6,9,11,13,15];
    const humanPieces = [48,50,52,54,57,59,61,63];
    if (!!human && !!PC) {
      for(let i =0; i< this.totalChess; i++) {
          if (i % 8 === 0) {
            this.isOdd = !this.isOdd;
          }
          if (this.isOdd) {
            this.chessboard.push(i % 2 === 0 ? 'black' : 'white');
          } else {
            this.chessboard.push(i % 2 === 0 ? 'white' : 'black');
          }
      }
      for(let i =0; i< 8; i++) {
        this.chessboard[pcPieces[i]] = PC.color;
        this.chessboard[humanPieces[i]] = human.color;
      }
    }



  }

  getChessboard(): string[] {
    return this.chessboard;
  }
}
