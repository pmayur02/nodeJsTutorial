const http = require("http");
const fs = require("fs");
const url = require("url");
const httpServer = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    switch (parsedUrl.pathname) {
        case "/":
            fs.appendFile("log.txt", `${Date.now()} : ${req.url}\n`, () => {
                res.end('base url called.');
            })
            break;
        case "/home":
            fs.appendFile("log.txt", `${Date.now()} : ${req.url}\n`, () => {
                res.end('home url called.');
            })
            break;
        case "/about":
            fs.appendFile("log.txt", `${Date.now()} : ${req.url}\n`, () => {
                res.end(`Hi, I am ${parsedUrl.query.name}`);
            })
            break;
        default:
            fs.appendFile("log.txt", `${Date.now()} : ${req.url}\n`, () => {
                res.end("404 not found");
            })
            break;
    }



})

httpServer.listen(8800, () => { console.log("Listening at 8800") });