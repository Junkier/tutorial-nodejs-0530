const express = require("express");

// 透過 express 產生 server 物件
const app = express();

// 新增 1
const books = require("./router/books");
// const about = require("./router/about");


app.get("/",(req,res)=>{
  res.send("Router GOGOGO !!!");
});


app.get("/testqq",(req,res)=>{
  res.send("This is /testqq end-point");
});

// 新增 2
// 只要 end-point 為 "/books" 開頭
// 統一轉送到 books router 裡 !!!!
app.use("/books",books);  
// app.use("/about",about);

console.log("下雨啦啦啦啦啦!!!!");


app.listen(8088,()=>{
  console.log("Server is running at localhost: 8088");
});