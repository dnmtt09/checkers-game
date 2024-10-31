import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-match-outcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-match-outcome.component.html',
  styleUrl: './modal-match-outcome.component.scss',
})
export class ModalMatchOutcomeComponent {
  isWin: boolean = true;

  playerIsWin(player: any): void {
    this.isWin = true;
  }
}
