import { Color, Types } from "../enum/enumPlayer";

export interface Player {
  color: Color;
  points: number;
  isTurn?: Types;
  name?: string;
}
