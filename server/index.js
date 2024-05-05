require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
  console.log("Sended");
});

app.use(registerRoute);
app.use(loginRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}\n`);
});
