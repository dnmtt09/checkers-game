import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chessboard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chessboard.component.html",
  styleUrl: "./chessboard.component.scss",
})
export class ChessboardComponent implements OnInit {
  colorScheme: ("black" | "light")[] = [];
  private readonly totalPieceChessboard: number = 64;
  ngOnInit(): void {
    for (let i = 0; i < this.totalPieceChessboard; i++) {
      this.colorScheme.push(i % 2 === 0 ? "black" : "light");
    }
  }
}
