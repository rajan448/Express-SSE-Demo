const express = require("express");
var SSE = require("express-sse");

const app = express();
const port = 8080;

var sse = new SSE(["array", "containing", "initial", "content", "(optional)"]);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => res.send("Hello World"));

app.get("/stream", sse.init);

app.get("/get", () => {
  sse.send({ hello: "Hello World" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
