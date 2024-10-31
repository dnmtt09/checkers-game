import {UtilityService} from './UtilityService';
import {Injectable} from '@angular/core';
import {Player} from '../shared/classes/player';
import {Color} from '../shared/enum/enumPlayer';

@Injectable({ providedIn: 'root' })
export class PcService {
  private chessboard = this.utilityService.getChessboard();
  private _PC?: Player;
  private _humanColor?: Color;
  private whiteChess = 'white';

  constructor(private utilityService: UtilityService) {}

  pcTurn(humanId: number) {
    const index = this.extractIndexChess();
    if(!this.isCapturingByHuman(index)){
      this.randomMove(index);
    }

  }

  set setInfo(color: Color) {
    this._PC! = {
      color: color! === 'red' ? 'blue' : 'red',
      points: 0,
    };
  }

  get getInfo() {
    return this._PC!;
  }

  set humanColor(color: Color) {
    this._humanColor = color;
  }

  private randomMove(index: number[]) {
    let stop = true;
    while (stop) {
      const nextMove = this.isFree(this.getRandomIntFromPcPosition(index));
      if (!!nextMove) {
        this.chessboard[nextMove.currentPosition] = '';
        this.chessboard[nextMove.currentPosition + nextMove.nextMove] =
          this._PC!.color;
        stop = false;
      }
    }
  }

  private isCapturingByHuman(index: number[]) {
    let p = false;
    index.forEach(i => {
      if (
        this.chessboard[i + 7] === this._humanColor ||
        this.chessboard[i + 9] === this._humanColor
      ) {
        const isFree = this.isFree(i);
        if (!!isFree) {
          this.chessboard[isFree.currentPosition] = '';
          this.chessboard[isFree.currentPosition + isFree.nextMove] =
            this._PC!.color;
          p = true;
          return;
        }
      }
    });
    return p;
  }

  private isFree(currentMove: number) {
    if (this.chessboard[currentMove + 7] === this.whiteChess)
      return this.createPositionResponse(currentMove, 7);
    else if (this.chessboard[currentMove + 9] === this.whiteChess)
      return this.createPositionResponse(currentMove, 9);
    return null;
  }

  private createPositionResponse(currentPosition: number, nextMove: number) {
    return {
      currentPosition: currentPosition,
      nextMove: nextMove,
    };
  }

  private getRandomIntFromPcPosition(maxNumber: number[]) {
    return maxNumber[Math.floor(Math.random() * maxNumber.length)];
  }

  private extractIndexChess() {
    return this.chessboard
      .map((chess, index) => (chess === this._PC?.color ? index : -1))
      .filter(index => index !== -1);
  }
}
