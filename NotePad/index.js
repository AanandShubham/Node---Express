const express = require('express')
const path = require('path')
const fs = require('fs')
const { title } = require('process')
const { log } = require('console')
const app = express()

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))



app.get('/',function(req,res){
    
    fs.readdir("./files/",(err,files)=>{
        let dataFile = []
        // console.log(files)
        files.forEach((file)=>{
            dataFile.push({
                title:file,
                data:fs.readFileSync("./files/"+file,"utf-8")
            })
        })
        console.log("---------------------------------\n")
        console.log(req.headers)
        console.log("-----------------------------------")
        res.render("Page",{notes:dataFile})
    })

})

// app.get("/test",async(req,res)=>{
//     let filedata = ""
//     fs.readFile("./files/age.txt",async (err,data)=>{
//        filedata = data; 
//        console.log("Data in Fn : ",data)
//     })

//     console.log("Data : ", filedata);
// })

app.post('/add',(req,res)=>{
    const title = req.body.title;
    const note = req.body.note;

    const fileName = title.split(' ').join('')+".txt";
    fs.writeFile("./files/"+fileName,note,(err)=>{
        if(err)
            console.log(`There is an error ${err.message}`);
        else
            console.log(`File Saved : ${fileName}`);

    })

    res.redirect('/');
})

app.post("/delete/:file",(req,res)=>{
    const fileToDelete = req.params.file
    const files = fs.readdirSync("./files/");
    console.log("files : ",files)

    let data = files.findIndex((file)=> file === fileToDelete);

    if(data >= 0){
        console.log(fileToDelete , " Found in database")
        fs.unlinkSync("./files/"+fileToDelete)
        console.log("File Deleted")

    }
    else{
        console.log(fileToDelete, "\nNot found !!!!")
    }
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("Server is running\n")
    console.log("Listening at port : 3000");
    console.log("Link : http://localhost:3000/")
})