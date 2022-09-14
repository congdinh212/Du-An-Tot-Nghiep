const experss = require("express");
const app = experss();

const errorMiddleware = require("./middleware/error")

app.use(experss.json())

// Route Imports
const product = require("./routers/productRoute");

app.use("/api/v1",product);

// Middleware for Errors --  Phần mềm trung gian cho các lỗi
app.use(errorMiddleware);


module.exports = app