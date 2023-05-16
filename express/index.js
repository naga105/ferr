const express = require("express"),
  http = require("http");
const hostname = "localhost";
const port = 3000;
const app = express();
const dishRouter = require("./router/dishRouter");
const promotionRouter = require("./router/promotionRouter");
const leaderRouter = require("./router/leaderRouter");
app.use("/dishes", dishRouter);
app.use("/promotion", promotionRouter);
app.use("/leader", leaderRouter);
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
