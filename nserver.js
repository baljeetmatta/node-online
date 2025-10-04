//static site handle
//Request/Response
//Endpoint->Receive
//Signup Screen->html->Server
//METHOD->GET/POST
//express
const http = require("http");
const fs = require("fs");
const url=require("url");
const { parse } = require("path");


const processRequest = (req, res) => {

    let filename = "index.html";
    console.log(req.url);
    //GET
    //Pathname, /save
    //QueryString username=value&password=value;
    //Pathname /save
    //QueryString ->X
    const parseUrl=url.parse(req.url,true);
    //console.log(parseUrl);




    // if (req.url.startsWith( "/save")) {

    // }
    if(parseUrl.pathname=="/save" && req.method=="GET")
    {
        // res.write("Welcome "+parseUrl.query.username);
        // res.end();
        let users=[];

        fs.readFile("users.json","utf-8",(err,data)=>{

            if(err) 
                users=[];
            else
                users=JSON.parse(data);

           let results= users.filter((item=>{
                if(item.username==parseUrl.query.username)
                    return true;
            }))
            if(results.length!=0)
            {
                res.write("User Alreay exits");
                res.end();

            }
            else{
            let obj={
                username:parseUrl.query.username,
                password:parseUrl.query.password,
            }
            users.push(obj);
            fs.writeFile("users.json",JSON.stringify(users),(err)=>{
                res.write("User Created");
                res.end();

            })
        }


        })


    }
    else  if(parseUrl.pathname=="/save" && req.method=="POST")
    {
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;

        })
        req.on("end",()=>{

            res.write(body);
            res.end();

        })
       // res.write("Welcome "+parseUrl.query.username);
       // res.end();

    }

    else if (req.url != "/") {
        filename = req.url.substring(1);

        res.write(readURL(filename));
        res.end();
    }

}
const server = http.createServer(processRequest);
server.listen(3000);
const readURL = (filename) => {
    //  fs.readFile("./"+filename, "utf-8", (err, data) => {
    //             if (err) throw err;
    //             res.write(data);
    //             res.end();
    //         });
    try {
        return fs.readFileSync("./" + filename, "utf-8");
    } catch (err) {
        return "";
    }
}
