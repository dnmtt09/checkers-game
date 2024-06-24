import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../shared/classes/player';
import { ChessboardComponent } from '../components/chessboard/chessboard.component';
import { PlayerColorComponent } from '../components/menu/player-color/player-color.component';
/*declare enum. This enum insert into a common file*/
/*create an object that represents a player*/

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, ChessboardComponent, PlayerColorComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
})
export class MainComponentComponent {
  playerIsReadyToGame: boolean = false;

  startGame(): void {
    this.playerIsReadyToGame = true;
  }
}
