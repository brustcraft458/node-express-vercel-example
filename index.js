// Import packages
import express from "express"

// Middlewares
const app = express();
app.use(express.json());

// Root
app.get("/sample", async (req, res, next) => {
  return res.status(200).json({
    title: "Hello Root",
    message: "Api Message",
  });
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
