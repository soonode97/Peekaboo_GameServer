export const packetNames = {
  common: {
    GamePacket: 'common.GamePacket',
  },
  auth: {
    C2S_ConnectGameRequest: 'auth.C2S_ConnectGameRequest',
    S2C_ConnectGameNotification: 'auth.S2C_ConnectGameNotification',
    S2C_ConnectNotification: 'auth.S2C_ConnectNotification',
  },
  gameData: {
    Position: 'gameData.Position',
    Player: 'gameData.Player',
    Ghost: 'gameData.Ghost',
    LocationUpdate: 'gameData.LocationUpdate',
    GhostLocationData: 'gameData.GhostLocationData',
    PlayerLocationData: 'gameData.PlayerLocationData',
    InitGameData: 'gameData.InitGameData',
    C2S_MoveRequest: 'gameData.C2S_MoveRequest',
    S2C_MoveNotification: 'gameData.S2C_MoveNotification',
  },
};
