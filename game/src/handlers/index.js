import {
  connectGameRequestHandler,
  spawnInitialGhostRequestHandler,
} from './auth/connectGame.handler.js';
import { movePlayerRequestHandler } from './game/movePlayer.handler.js';
import { moveGhostRequestHandler } from './game/moveGhost.handler.js';
import { PACKET_TYPE } from '../constants/header.js';

const handlers = {
  [PACKET_TYPE.ConnectGameRequest]: {
    handler: connectGameRequestHandler,
    protoType: 'common.GamePacket',
  },
  [PACKET_TYPE.PlayerMoveRequest]: {
    handler: movePlayerRequestHandler,
    protoType: 'common.GamePacket',
  },
  [PACKET_TYPE.GhostMoveRequest]: {
    handler: moveGhostRequestHandler,
    protoType: 'common.GamePacket',
  },
  [PACKET_TYPE.SpawnInitialGhostRequest]: {
    handler: spawnInitialGhostRequestHandler,
    protoType: 'common.GamePacket',
  },
};

export const getHandlerByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].handler;
};

export const getProtoTypeByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].protoType;
};
