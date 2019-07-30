const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 5000;

const server = http
  .createServer((req, res) => {
    // switch (req.url) {
    //   case "/":
    //     console.log(path.join(__dirname, "public", "index.html"));
    //     fs.readFile(
    //       path.join(__dirname, "public", "index.html"),
    //       (err, data) => {
    //         if (err) {
    //           throw err;
    //         }
    //         res.writeHead(200, { "Content-Type": "text/html" });
    //         res.end(data);
    //       }
    //     );
    //     break;
    //   case "/api/users":
    //     const users = [
    //       { name: "Bob Smith", age: 40 },
    //       { name: "John Doe", age: 38 }
    //     ];

    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify(users));
    //     break;
      // Build file path
      let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
      );
      // extname
      let = extname = path.extname(filePath);

      // Initial content type
      let contentType = "text/html";

      switch(extname){
        case  ".js":
          contentType = "text/javascript";
        break;
        case  ".css":
            contentType = "text/css";
          break;
          case  ".json":
              contentType = "application/json";
            break;
            case  ".png":
                contentType = "image/png";
              break;
              case  ".jpg":
                  contentType = "image/jpg";
                break;
      }
      fs.readFile(filePath,(err,content)=>{
        if(err){
          if(err.code =="ENOENT"){
            // Page not found
            fs.readFile(path.join(__dirname,"public","404.html"),(err,content)=>{
              res.writeHead(200,{"Content-Type":"text/html"});
              res.end(content,"utf8");
            });
          }else{
            // Other error, server error
            res.writeHead(500);
            res.end("Error "+err.code);
          }
        }else {
            // Succes
            res.writeHead(200,{"Content-Type":contentType});
            res.end(content,"utf8");
        }
      });
    
  })
  .listen(port, () => console.log("Server run on " + port));
