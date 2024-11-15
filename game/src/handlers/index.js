const handlers = {};

export const getHandlerById = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].handler;
};

export const getProtoTypeById = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].protoType;
};

export const getProtoPayloadTypeById = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].protoPayloadType;
};
