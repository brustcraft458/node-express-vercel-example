// Import packages
import express from "express"

// Middlewares
const app = express();
app.use(express.json());

// Example Class
class Anything {
  constructor () {
    this.num = 0
  }

  add() {
    this.num++
  }

  sub() {
    this.num--
  }

  toJson() {
    return {count: this.num}
  }
}

var anything = new Anything()

// Root
app.get("/sample", async (req, res, next) => {
  res.status(200).json({
    title: "Hello Root",
    ...anything.toJson()
  })

  anything.add()
});

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
