import { UtilityService } from './UtilityService';
import { Injectable } from '@angular/core';
import { Player } from '../shared/classes/player';
import { Color } from '../shared/enum/enumPlayer';

@Injectable({ providedIn: 'root' })
export class PcService {
  private chessboard = this.utilityService.getChessboard();
  private _PC?: Player;
  private _humanColor?: Color;

  constructor(private utilityService: UtilityService) {}
  //TODO gestione in modalita' asincrona
  pcTurn(humanId: number) {
    let stopCheck = false; // TODO to fix
    this.chessboard.map((chess, index) => {
      //TODO quando realizzo con RXJS, non ho accesso all'indice
      if (chess === this.getInfo.color) {
        if (this.isCapture(index) && !stopCheck) {
          if (this.isFree(index, 7)) {
            this.chessboard[index] = '';
            this.chessboard[index + 7] = this.getInfo.color;
          } else if (this.isFree(index, 9)) {
            this.chessboard[index] = '';
            this.chessboard[index + 9] = this.getInfo.color;
          }
          stopCheck = true; // TODO to fix
        }
      }
    });
    // altri metodi
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

  private isFree(id: number, nextPosition: 7 | 9) {
    console.log('stampo se sei libero. ', this.chessboard[id + nextPosition]);
    return this.chessboard[id + nextPosition] === 'white';
  }
  private isCapture(id: number) {
    return (
      this.chessboard[id + 7] === this._humanColor ||
      this.chessboard[id + 9] === this._humanColor
    );
  }
}
