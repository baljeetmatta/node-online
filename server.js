//
const http = require("http");
const fs = require("fs");
const url=require("url");


// const server=http.createServer((req,res)=>{
//     console.log(req.url);

//     console.log("Request received");
//     res.write("Response from server");
//     res.end();

// }); 
const callback = (req, res) => {
    //console.log("Request received");
    //res.write("Response from server");
    //res.end();
    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url == "/") {
        // res.write("<b>Home Page</b>");
        // res.end();
        // fs.readFile("index.html", "utf-8", (err, data) => {
        //     if (err) throw err;
        //     res.write(data);
        //     res.end();

        // });

        res.write(readURL("index.html"));
       res.end();
    }
    else if (req.url == "/style.css") {
        // fs.readFile("style.css", "utf-8", (err, data) => {
        //     if (err) throw err;
        //     res.write(data);
        //     res.end();

        // });
        res.write(readURL("style.css"));
       res.end();
    }
    else if (req.url == "/script.js") {
        // fs.readFile("script.js", "utf-8", (err, data) => {
        //     if (err) throw err;
        //     res.write(data);
        //     res.end();

        // });
       res.write(readURL("script.js"));
       res.end();

    }
   
    else {

        res.end();

    }

}
//Static site Handle
const processRequest = (req, res) => {
    
        console.log(req.url);
        let filename="index.html";
        if(req.url=="/about")//endpoints
            filename="about.html";

        else if(req.url!="/")
            filename=req.url.substring(1);

        res.write(readURL(filename));
        res.end();
    
}

const server = http.createServer(processRequest);
server.listen(3000);
//localhost
//reqeust,response
const readURL=(filename)=>{
//  fs.readFile("./"+filename, "utf-8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
try{
return fs.readFileSync("./"+filename,"utf-8");
}catch(err){
    return "";  
}
}

