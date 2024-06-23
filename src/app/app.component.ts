import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChessboardComponent } from './components/chessboard/chessboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, ChessboardComponent],
})
export class AppComponent {
  title = 'checkers-game';
}
