import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true}));

app.post("/submit", (req, res) => {
  console.log(req.body);
  const bandName = Object.values(req.body).join("");
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
  // You can also send a response back to the client
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
