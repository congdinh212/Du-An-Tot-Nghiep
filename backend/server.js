const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// Handling Uncaught Exception -- Xử lý ngoại lệ chưa được thông báo
// Shutting down the server due to Uncaught Exception -- Tắt máy chủ do Ngoại lệ Chưa được thông báo
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// Config
dotenv.config({path:"backend/config/config.env"});

// Connecting to database 
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Máy chủ đang hoạt động trên http://localhost:${process.env.PORT}`);
})


// Unhandled Promise Rejecttion -- Từ chối Promise không được xử lý
//Shutting down the server due to Unhandled Promise Rejecttion -- Tắt máy chủ do Từ chối Promise không được xử lý
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });