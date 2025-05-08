const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("node:path");
const app = express();
require("./config/passport"); // Initialize passport strategies
const cors = require("cors");

// or if you want to restrict to certain origins:
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");

app.use("/", authRouter);
app.use("/posts", postsRouter);

app.listen(3000, () => {
  console.log("server listening on 3000");
});
