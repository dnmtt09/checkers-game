import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../services/Game';
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

  constructor(private gameService: Game) {}

  ngOnInit(): void {
    this.chessboard = this.gameService.getChessboard();
    this.gameService.initializePlayers(this.color!);
  }
}
