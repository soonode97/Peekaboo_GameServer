import User from './user.class.js';
import { Rotation, Position } from './moveInfo.class.js';
import { CHARACTER_STATE } from '../../constants/state.js';

export class Character {
  constructor() {
    // 게임 정보
    this.position = new Position();
    this.rotation = new Rotation();
    this.hp = 1;
    this.state = CHARACTER_STATE.IDLE;
  }
}
