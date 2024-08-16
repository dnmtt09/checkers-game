import { Injectable } from '@angular/core';
import { UtilityService } from './UtilityService';

@Injectable()
export class HumanService {
  private _chessboard: string[];
  constructor(private utilityService: UtilityService) {
    this._chessboard = utilityService.getChessboard();
  }

  setPiece(previous: number, next: number): void {
    this._chessboard[previous] = '';
    this._chessboard[next] = 'red'; /* TODO */
  }
}
