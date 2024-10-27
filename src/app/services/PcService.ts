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
    let stop = false;
    this.chessboard.map((chess, index) => {
      //TODO quando realizzo con RXJS, non ho accesso all'indice

      if (chess === this.getInfo.color && !stop) {
        if (this.isCapture(index)) {
          if (this.isFree(index, 7)) {
            this.chessboard[index] = '';
            this.chessboard[index + 7] = this.getInfo.color;
            stop = true;
          } else if (this.isFree(index, 9)) {
            this.chessboard[index] = '';
            this.chessboard[index + 9] = this.getInfo.color;
            stop = true;
          }
        } else {
          this.randomMove();
          stop = true;
        }
      }
    });
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
      this.chessboard[id + 14] === this._humanColor ||
      this.chessboard[id + 18] === this._humanColor
    );
  }

  private prova() {
    for (let i = 0; i < 8; i++) {
      console.log('\n');
    }
    for (let y = 0; y < 8; y++) {
      console.log('|');
      console.log(this.chessboard[y]);
    }
  }

  private randomMove() {
    let stop = false;
    console.log('valore del colore in randomMove', this.getInfo.color);
    this.chessboard.map((chess, index) => {
      //TODO quando realizzo con RXJS, non ho accesso all'indice

      if (chess === this.getInfo.color && !stop) {
        if (this.isFree(index, 7)) {
          this.chessboard[index] = '';
          this.chessboard[index + 7] = this.getInfo.color;
          stop = true;
        } else if (this.isFree(index, 9)) {
          this.chessboard[index] = '';
          this.chessboard[index + 9] = this.getInfo.color;
          stop = true;
        }
      }
    });
  }
}
