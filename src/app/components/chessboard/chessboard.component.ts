import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Color } from '../../shared/enum/enumPlayer';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chessboard.component.html',
  styleUrl: './chessboard.component.scss',
})
export class ChessboardComponent implements OnInit {
  chessboard: string[] = [];
  @Input() color: Color | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.chessboard = this.gameService.getChessboard();
    this.gameService.initializePlayers(this.color!);
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
