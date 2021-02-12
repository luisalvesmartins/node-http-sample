const http = require('http');
var fetch = require('node-fetch');
http.createServer(async function (req, res) {

    var u=req.url;

    if(u=='/fetch'){
        let f=await fetch("http://www.bing.com");
        let r=await f.text();
        res.write(r);
        res.end()
    }
    else
    {
        res.write("You wanted to go to " + req.url + ". Here you are.");
        res.end();
    }

}).listen(8088); 

console.log("HTTP server running on port 8088")
console.log("try http://localhost:8088/something")
console.log(" or http://localhost:8088/fetch")