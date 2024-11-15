import { CLIENT_VERSION, HOST, PORT, UDP_PORT } from "../constants/env.js";

export const config = {
  server: {
    port: PORT,
    udpPort: UDP_PORT,
    host: HOST,
  },
  client: {
    clientVersion: CLIENT_VERSION,
  },
  packet: {
    typeLength: PACKET_TYPE_LENGTH,
    versionLength: VERSION_LENGTH,
    sequenceLength: SEQUENCE_LENGTH,
    payloadLength: PAYLOAD_LENGTH,
  },
  globalFailCode: {
    NONE: 0,
    UNKNOWN_ERROR: 1,
    INVALID_REQUEST: 2,
    AUTHENTICATION_FAILED: 3,
  },
};
