import intervalManager from '../managers/interval.manager.js';
import { ghostsLoacationNotification } from '../../notifications/game.notification.js';
import { usersLocationNotification } from '../../notifications/game.notification.js';
import { startGameNotification } from '../../notifications/game.notification.js';
import { GAME_SESSION_STATE } from '../../constants/state.js';
import { Character } from './character.class.js';

class Game {
  constructor(id) {
    this.id = id;
    this.hostId = null;
    this.users = [];
    this.ghosts = [];
    this.state = GAME_SESSION_STATE.PREPARE;
  }

  startGame() {
    // 귀신 5마리 정도 세팅

    // 게임 상태 변경
    this.state = 'playing';

    intervalManager.instance.addPlayersInterval(
      this.id,
      usersLocationNotification(this),
      1000 / 60,
    );
    intervalManager.instance.addGhostsInterval(
      this.id,
      ghostsLoacationNotification(this),
      1000 / 60,
    );

    startGameNotification(this);
  }

  addUser(user) {
    if (!this.hostId) {
      this.hostId = user.id;
    }
    const character = new Character();
    user.attachCharacter(character);
    this.users.push(user);
    //intervalManager.instance.addPingInterval(user.id);
  }

  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  addGhost(ghost) {
    // 이렇게 매개변수를 받아 넣어줘도 되고 여기서 랜덤으로 인스턴스를 생성해서 바로 넣어줘도 될 것 같습니다.
    this.ghosts.push(ghost);
  }

  getGhost(ghostId) {
    return this.ghosts.find((ghost) => ghost.id === ghostId);
  }
}

export default Game;
