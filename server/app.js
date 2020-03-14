var express = require("express");
var app = express();

app.use((request, response, next) => {
  response.append("Access-Control-Allow-Origin", ["*"]);
  response.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/data", (request, response) => {
  response.send(data);
});
const data = [
  {
    name: "Smith",
    descrip: "Blonde, black",
    reasonDeath: "head",
    killer: "Arnold",
    weapon: "Mace"
  },
  {
    name: "John",
    descrip: "Blonde, white",
    reasonDeath: "head",
    killer: "Simon",
    weapon: "Sword"
  },
  {
    name: "John",
    descrip: "Blonde",
    reasonDeath: "head",
    killer: "Fiona",
    weapon: "Axe"
  },
  {
    name: "John",
    descrip: "Blonde",
    reasonDeath: "head",
    killer: "Arnold",
    weapon: "Mace"
  }
];
app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
