import { getGameSession } from '../../sessions/game.session.js';

// 플레이어 이동 요청에 따른 핸들러 함수
export const movePlayerRequestHandler = ({ socket, payload }) => {
  try {
    const { userId, position } = payload;

    // 현재 프로토빌드로 게임 첫번째 세션을 반환하도록 함.
    const gameSession = getGameSession();

    // 게임 세션에서 유저 찾기
    const user = gameSession.getUser(userId);
    if (!user) {
      console.error(e.message);
    }

    user.position.updatePosition(position.x, position.y, position.z);
  } catch (e) {
    console.error(e.message);
  }
};
