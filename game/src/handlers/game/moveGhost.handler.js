import { getGameSession } from '../../sessions/game.session.js';

// 호스트 유저만 요청을 보냅니다.
export const moveGhostRequestHandler = ({ socket, payload }) => {
  try {
    const { ghostMoveinfos } = payload;

    const gameSession = getGameSession();
    if (gameSession) {
      console.error('해당 게임 세션이 존재하지 않습니다.');
    }

    // 해당 게임 세션에 고스트들의 정보 저장
    ghostMoveinfos.forEach((ghostMoveinfo) => {
      const { ghostId, moveInfo } = ghostMoveinfo.ghostId;
      const { position, rotation, characterState } = moveInfo;

      const ghost = gameSession.getGhost(ghostId);
      if (ghost) {
        console.error('해당 귀신 정보가 존재하지 않습니다.');
      }

      ghost.position.updatePosition(position.x, position.y, position.z);
      ghost.rotation.updateRocation(rotation.x, rotation.y, rotation.z);
      ghost.state = characterState;
    });
  } catch (e) {
    console.error(e);
  }
};
