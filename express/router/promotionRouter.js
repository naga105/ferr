const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
promotionRouter.get("/", (req, res, next) => {
  res.end("will sent all promotion");
});
promotionRouter.post("/", (req, res, next) => {
  res.end(
    `will add promotion ${req.body.name} with details ${req.body.description}`
  );
});
promotionRouter.put("/", (res, req) => {
  res.statusCode = 403;
  res.end("Put operator not suported on /");
});
promotionRouter.delete("/", (_, res) => {
  res.end("delete all promotion ");
});
promotionRouter.get("/:dishId", (_, res) => {
  res.status = 403;
  res.end("Post operator not surpport " + _.params.dishId);
});
promotionRouter.put("/:dishId", (_, res) => {
  res.write("Update dish" + _.params.dishId + "\n");
  res.end(`will update the dish ${_.body.name} with details ${_.body.details}`);
});
promotionRouter.delete("/:dishId", (_, res) => {
  res.end(`deleting dish ${_.params.dishId}`);
});

module.exports = promotionRouter;
