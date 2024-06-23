import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChessboardComponent } from './components/chessboard/chessboard.component';
import { ModalMatchOutcomeComponent } from './components/modal-match-outcome/modal-match-outcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, ChessboardComponent, ModalMatchOutcomeComponent],
})
export class AppComponent {
  title = 'checkers-game';
}
