import initServer from './init/index.js';
import net from 'net';
import { onConnection } from './events/onConnection.js';
import { config } from './config/config.js';

const tcpServer = net.createServer(onConnection);
initServer()
  .then(() => {
    tcpServer.listen(config.server.tcpPort, config.server.tcpHost, () => {
      console.log(`tcp서버가 포트 ${config.server.tcpPort}에서 대기 중`);
      console.log(tcpServer.address());
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
