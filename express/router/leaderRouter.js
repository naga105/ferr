const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
leaderRouter.get("/", (req, res, next) => {
  res.end("will sent all leader");
});
leaderRouter.post("/", (req, res, next) => {
  res.end(
    `will add leader ${req.body.name} with details ${req.body.description}`
  );
});
leaderRouter.put("/", (res, req) => {
  res.statusCode = 403;
  res.end("Put operator not suported on /");
});
leaderRouter.delete("/", (_, res) => {
  res.end("delete all leader ");
});
leaderRouter.get("/:dishId", (_, res) => {
  res.status = 403;
  res.end("Post operator not surpport " + _.params.dishId);
});
leaderRouter.put("/:dishId", (_, res) => {
  res.write("Update dish" + _.params.dishId + "\n");
  res.end(`will update the dish ${_.body.name} with details ${_.body.details}`);
});
leaderRouter.delete("/:dishId", (_, res) => {
  res.end(`deleting dish ${_.params.dishId}`);
});

module.exports = leaderRouter;
