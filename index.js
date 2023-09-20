// Import packages
import express from "express"
import { WebSocketServer } from "ws"

// Middlewares
const app = express();
app.use(express.json());

// Root
app.get("/sample", async (req, res, next) => {
  try {
    const wss = new WebSocketServer({port: 3000})
    // Websocket Tess
    wss.on("connection", (ws) => {
      ws.on("message", async(msg) => {
        ws.send(`hello ${msg}`)
      })
    })

    res.status(200).json({"state": "conected"})
  } catch (error) {
    res.status(200).json(JSON.stringify(error))
  }
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
