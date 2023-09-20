// Import packages
import express from "express"
import { WebSocketServer } from "ws"

// Middlewares
const app = express();
app.use(express.json());

// Root
app.get("/sample", async (req, res, next) => {
  // Websocket Tess
  const wss = new WebSocketServer({port: 3001})
  wss.on("connection", (ws) => {
    ws.on("message", async(msg) => {
      ws.send(`hello ${msg}`)
    })
  })

  return res.status(200).json({
    title: "Hello Root",
    socket: wss,
  });
});

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
