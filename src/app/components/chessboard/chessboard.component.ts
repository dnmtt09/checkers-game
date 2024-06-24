import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../services/Game';

@Component({
  selector: 'app-chessboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chessboard.component.html',
  styleUrl: './chessboard.component.scss',
})
export class ChessboardComponent {
  chessboard: string[] = [];
  constructor(private gameService: Game) {
    this.chessboard = this.gameService.getChessboard();
  }
}
