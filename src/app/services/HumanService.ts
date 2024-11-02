import { Injectable } from "@angular/core";
import { UtilityService } from "./UtilityService";
import { Player } from "../shared/classes/player";
import { Color } from "../shared/enum/enumPlayer";

@Injectable({ providedIn: "root" })
export class HumanService {
  private _chessboard: string[];
  private human?: Player;
  constructor(private utilityService: UtilityService) {
    this._chessboard = utilityService.getChessboard();
  }

  setPiece(previous: number, next: number): void {
    this._chessboard[previous] = "";
    this._chessboard[next] = this.getInfo.color;
  }

  set setInfo(color: Color) {
    this.human = {
      color: color!,
      points: 0,
    };
  }

  get getInfo() {
    return this.human!;
  }
}
