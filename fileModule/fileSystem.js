const fs = require("fs");

// write file sync
fs.writeFileSync("./sample.txt","Learning file system");
console.log(fileWriteSync); // does not return anything

// write file async
fs.writeFile("./asyncSample.txt","Learing async file system",(err)=>{
        if(err){
            console.log(err);
        }
})



fs.readFileSync("./sample.txt","utf-8");
console.log(readFileSync);

fs.readFile("./asyncSample.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
       
}
)
