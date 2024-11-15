import User from '../../classes/models/user.class.js';

export const connectGameRequestHandler = ({ socket, payload }) => {
  const { playerId, token } = payload;

  const user = new User(playerId, socket);
  //아직안됨
};
