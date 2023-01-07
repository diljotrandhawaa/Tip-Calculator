
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(3002, (req, res) => {
  console.log("Server is up and running on port 3002");
})
