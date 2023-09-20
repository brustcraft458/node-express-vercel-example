// Import packages
import express from "express"
import { WebSocketServer } from "ws"

const wss = new WebSocketServer({port: 3000})

// Middlewares
const app = express();
app.use(express.json());

// Websocket Tess
wss.on("connection", (ws) => {
  ws.on("message", async(msg) => {
    ws.send(`hello ${msg}`)
  })
})

// Root
app.get("/sample", async (req, res, next) => {
  return res.status(200).json({
    title: "Hello Root",
    message: "Api Rest",
  });
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
