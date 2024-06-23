import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/*declare enum. This enum insert into a common file*/
/*create an object that represents a player*/

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
})
export class MainComponentComponent {
  playYesOrNo: boolean = false;
  /*player: object;

  stateGame(colorPlayer: playerChoose): void {
    this.player.color = colorPlayer;
    this.playYesOrNo = true;
  }*/
}
