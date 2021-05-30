const express = require("express");

// 透過 express 產生 router 物件
const router  = express.Router();

// /about/... 
router.get("/",(req,res)=>{
  res.send("This is /about router.");
});

// /about/a
router.get("/a",(req,res)=>{ 
  res.send("我是 /a 路徑！！！");
});
// /about/bbbb
router.get("/bbbb",(req,res)=>{ 
  res.send("我是 /bbbb 路徑！！！");
});

// /about/cde
router.get("/cde",(req,res)=>{ 
  res.send("我是 /cde 路徑！！！");
});

module.exports = router;



