import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-match-outcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-match-outcome.component.html',
  styleUrl: './modal-match-outcome.component.scss',
})
export class ModalMatchOutcomeComponent {
  @Input() message: string = '';
  @Input() player: string = '';
}
