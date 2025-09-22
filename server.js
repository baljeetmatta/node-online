//
const http=require("http");
const fs=require("fs");

// const server=http.createServer((req,res)=>{
//     console.log(req.url);

//     console.log("Request received");
//     res.write("Response from server");
//     res.end();

// }); 
const callback=(req,res)=>{
     //console.log("Request received");
     //res.write("Response from server");
    //res.end();
    res.writeHead(200,{'Content-Type':'text/html'});

    if(req.url=="/")
    {
       // res.write("<b>Home Page</b>");
       // res.end();
       fs.readFile("index.html","utf-8",(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
        
       });

    }
    else{
        
        res.end();

    }
}

const server=http.createServer(callback);

server.listen(3000);
//localhost
//reqeust,response


