const express = require("express");
const router  = express.Router();

router.get("/",(req,res)=>{
  res.send("This is /books router.");
});

router.get("/list",(req,res)=>{
  let data = [
    { name : "灌籃高手"   , no : 10001 } ,
    { name : "進擊的巨人" , no : 10002 } ,
    { name : "棋靈王"    , no : 10003 } ,
    { name : "高手？"    , no : 10004 } ,
    { name : "海賊王"    , no : 10005 } ,
  ];
  
  res.json({
    result : data
  });
});

console.log("我是 books router.");

module.exports = router;


