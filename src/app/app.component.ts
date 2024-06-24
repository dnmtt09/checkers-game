import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChessboardComponent } from './components/chessboard/chessboard.component';
import { PlayerColorComponent } from './components/menu/player-color/player-color.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, ChessboardComponent, PlayerColorComponent],
})
export class AppComponent {
  title = 'checkers-game';
}
