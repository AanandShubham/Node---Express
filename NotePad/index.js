const express = require('express')
const path = require('path')
const fs = require('fs')
const { title } = require('process')
const app = express()

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

// app.use((req,res,next)=>{
//     console.log(req.query.name);
//     next();
// })

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

        res.render("Page",{notes:dataFile})
    })

})

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


app.listen(3000,function(){
    console.log("Server is running\n")
    console.log("Listening at port : 3000");
})