const http = require("http");
const fs = require("fs");
const httpServer = http.createServer((req,res)=>{
    console.log("server created");
    fs.appendFile("log.txt",`${Date.now()} : ${req.url}\n`,()=>{
        res.end('Server Started...');
    })
    
    
})

httpServer.listen(8800,()=>{console.log("Listening at 8800")});