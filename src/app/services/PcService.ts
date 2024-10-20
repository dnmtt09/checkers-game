import { UtilityService } from './UtilityService';
import { Injectable } from '@angular/core';

@Injectable()
export class PcService {
  private chessboard = this.utilityService.getChessboard();

  constructor(private utilityService: UtilityService) {}

  pcTurn(id: number) {
    const randomMove = Math.random() < 0.5 ? 7 : 9;
    const captured = this.pieceIsCapture(id);
    if (captured) {
      const isFree = this.chessboardLocationIsFree(id);
      if (isFree) {
        this.chessboard[id + randomMove] = 'blue';
      }
    }
    // altri metodi
  }
  private pieceIsCapture(id: number) {
    return this.chessboard[id] === 'red';
  }

  private chessboardLocationIsFree(id: number) {
    return this.chessboard[id + 7] === '' || this.chessboard[id + 9] === '';
  }
}
