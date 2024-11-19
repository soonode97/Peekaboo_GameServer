import { USER_STATE } from '../../constants/state.js';

class User {
  constructor(id, socket) {
    // 유저 기본 정보
    this.id = id;
    this.socket = socket;
    this.state = USER_STATE.STAY;

    // 게임 관련 정보
    this.gameId = null;
    // 커스터마이징 추가 고려사항
    this.character = null;
  }

  attachCharacter(character) {
    if (!this.character) {
      this.character = character;
      return;
    }
    console.error('이미 존재하는 캐릭터가 있습니다.');
  }
}

export default User;
