import { Color, Types } from '../enum/enumPlayer';

export interface Player {
  color: Color;
  isTurn?: Types;
  name?: string;
  points: number;
  type: Types;
}
