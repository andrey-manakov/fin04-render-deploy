import express from "express";

const application = express();

const port = 3001;

application
  .get("/", (req, res) => {
    res.send({
      message: "Hello, World!!!!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 200),
    });
  });

application.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});