require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const mysql = require("mysql2");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;

//? config template engine
configViewEngine(app);

//? Routes Declaration
app.use("/", webRoutes);

app.listen(port);
