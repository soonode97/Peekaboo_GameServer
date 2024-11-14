import initServer from "./init/index.js";
import net from "net";
import { onConnection } from "./events/onConnection.js";
import { TCP_PORT, TCP_HOST, UDP_PORT } from "./constants/env.js";
import dgram from "dgram";

const udpServer = dgram.createSocket("udp4");

udpServer.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  udpServer.send();
});

udpServer.bind(UDP_PORT, () => {
  console.log(`udp서버가 포트 ${UDP_PORT}에서 대기 중`);
  console.log(udpServer.address());
});

const tcpServer = net.createServer(onConnection);
initServer()
  .then(() => {
    tcpServer.listen(TCP_PORT, TCP_HOST, () => {
      console.log(`tcp서버가 포트 ${TCP_PORT}에서 대기 중`);
      console.log(tcpServer.address());
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
