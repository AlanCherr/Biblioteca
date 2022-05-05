var express = require("express")
var router = express.Router()

router.get("/",(req,res,next)=>{
    console.log("Categories");
    res.send("ok")
})
router.post("/",(req,res,next)=>{
    res.send("post")
})
router.put("/",(req,res,next)=>{
    res.send("put")
})
router.delete("/",(req,res,next)=>{
    res.send("delete")
})

module.exports = router