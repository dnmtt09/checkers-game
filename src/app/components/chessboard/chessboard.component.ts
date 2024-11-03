import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { UtilityService } from "../../services/UtilityService";
import { Color } from "../../shared/enum/enumPlayer";
import { PcService } from "../../services/PcService";
import { HumanService } from "../../services/HumanService";
import { ModalMatchOutcomeComponent } from "../modal-match-outcome/modal-match-outcome.component";
import {ModalWaitActionComponent} from "../../shared/modal-wait-action/modal-wait-action.component";

@Component({
  selector: "app-chessboard",
  standalone: true,
  imports: [CommonModule, ModalMatchOutcomeComponent, ModalWaitActionComponent],
  templateUrl: "./chessboard.component.html",
  styleUrl: "./chessboard.component.scss",
})
export class ChessboardComponent implements OnInit {
  chessboard: string[] = [];
  @Input() color: Color | undefined;
  private isFirstMove = true;
  private previousChoice = 0;
  private startGame = false;

  constructor(
    private utilityService: UtilityService,
    private pcService: PcService,
    private humanService: HumanService
  ) {}

  ngOnInit(): void {
    this.chessboard = this.utilityService.getChessboard();
    this.humanService.setInfo = this.color!;
    this.pcService.setInfo = this.color!;
    this.pcService.humanColor = this.humanService.getInfo.color;
    this.utilityService.initializeChessboard(
      this.pcService.getInfo,
      this.humanService.getInfo
    );
    this.startGame = true;
  }

  setPiece(id: number): void {
    /* TODO usare lo HumanService*/
    if (this.startGame) {
      if (this.isFirstMove) {
        this.isFirstMove = false;
        this.previousChoice = id;
      } else {
        this.isFirstMove = true;
        this.chessboard[this.previousChoice] = "";
        this.chessboard[id] = this.color!;
        this.pcService.pcTurn();
      }
    }
  }

  getStatusWaitModal() { //TODO da sistemare. entra troppe volte
    console.log('quante volte entri qui');
    return this.utilityService.getStatusWaitModal();
  }
}
