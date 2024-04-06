const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const usersRouter = require("./routes/uesrs.router");
const postsRouter = require("./routes/posts.router");
const productsRouter = require("./routes/products.router");

require("dotenv").config();

const port = 3000;

const app = express();

mongoose
  .connect(process.env.mongo_db)
  .then(() => {
    console.log("mognodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (rea, res) => {
  res.render("index", {
    body: "body 부분입니다",
  });
});

app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("listening on 3000");
});
