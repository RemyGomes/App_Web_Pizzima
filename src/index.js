require("dotenv").config();
const fs = require('fs');
import express from "express";
import path from "path";
import morgan from "morgan";
import indexRouter from "./controllers/index";
import session from 'express-session';

const app = express();

// View engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Logs
app.use(morgan("dev"));

// Url params middleware
app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use("/static", express.static("public"));

app.use("/public/materialize",express.static("node_modules/materialize-css/dist"));
app.use("/public/jquery", express.static("node_modules/jquery/dist"));

app.use("/services", express.static("src/services"));

// Controllers
app.use("/", indexRouter);

// Sessions
app.use(session({secret: "une chaîne de caractères", cookie: { maxAge: 60000 }}))

// Start app on port APP_PORT
export const server = app.listen(process.env.APP_PORT || 3000, () =>
  console.log(`App listening on port ${process.env.APP_PORT}!`)
);

export default app;
