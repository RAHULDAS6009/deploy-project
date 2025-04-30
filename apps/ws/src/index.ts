import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (ws: WebSocket) => {
  console.log("inside web socket server");
  ws.send("something");
});

console.log("web socket server is running at 8080");
