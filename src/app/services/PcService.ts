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
}
