import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../../services/UtilityService';
import { Color } from '../../shared/enum/enumPlayer';
import { HumanService } from '../../services/HumanService';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  imports: [CommonModule],
  providers: [UtilityService, HumanService],
  templateUrl: './chessboard.component.html',
  styleUrl: './chessboard.component.scss',
})
export class ChessboardComponent implements OnInit {
  chessboard: string[] = [];
  @Input() color: Color | null = null;
  private isFirstMove: boolean = false;
  private previous: number = 0;
  private next: number = 0;

  constructor(
    private utilityService: UtilityService,
    private humanService: HumanService,
  ) {}

  ngOnInit(): void {
    this.chessboard = this.utilityService.getChessboard();
    this.utilityService.initializePlayers(this.color!);
  }

  setPiece(id: string): void {
    /* TODO */
    if (this.isFirstMove) {
      this.isFirstMove = true;
      this.previous = parseInt(id);
    } else {
      this.isFirstMove = false;
      this.previous = parseInt(id);
    }
    this.humanService;
  }

  getIdPiece(chess: string): string {
    switch (chess) {
      case 'red':
        return 'id-red';
      case 'blue':
        return 'id-blue';
      default:
        return 'none';
    }
  }
}
