import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../../services/UtilityService';
import { Color } from '../../shared/enum/enumPlayer';
import { HumanService } from '../../services/HumanService';
import { PcService } from '../../services/PcService';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  imports: [CommonModule],
  providers: [UtilityService, HumanService, PcService],
  templateUrl: './chessboard.component.html',
  styleUrl: './chessboard.component.scss',
})
export class ChessboardComponent implements OnInit {
  chessboard: string[] = [];
  @Input() color: Color | undefined;
  private isFirstMove = true;
  private previousChoice = 0;
  private pcTurn = false;

  constructor(
    private utilityService: UtilityService,
    private pcService: PcService,
  ) {}

  ngOnInit(): void {
    this.chessboard = this.utilityService.getChessboard();
    this.utilityService.initializePlayers(this.color!);
  }

  setPiece(id: number): void {
    /* TODO usare lo HumanService*/
    if (this.isFirstMove) {
      this.isFirstMove = false;
      this.previousChoice = id;
      console.log('mossa precedente ', id);
    } else {
      this.isFirstMove = true;
      console.log('mossa successiva ', id);
      this.chessboard[this.previousChoice] = '';
      this.chessboard[id] = this.color!;
      this.pcTurn = true;
    }
  }
}
