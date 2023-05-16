const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
dishRouter.get("/", (req, res, next) => {
  res.end("will sent all dishes");
});
dishRouter.post("/", (req, res, next) => {
  res.end(
    `will add dishes ${req.body.name} with details ${req.body.description}`
  );
});
dishRouter.put("/", (res, req) => {
  res.statusCode = 403;
  res.end("Put operator not suported on /");
});
dishRouter.delete("/", (_, res) => {
  res.end("delete all dishes ");
});
dishRouter.get("/:dishId", (_, res) => {
  res.status = 403;
  res.end("Post operator not surpport " + _.params.dishId);
});
dishRouter.put("/:dishId", (_, res) => {
  res.write("Update dish" + _.params.dishId + "\n");
  res.end(`will update the dish ${_.body.name} with details ${_.body.details}`);
});
dishRouter.delete("/:dishId", (_, res) => {
  res.end(`deleting dish ${_.params.dishId}`);
});

module.exports = dishRouter;
