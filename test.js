const fs = require("fs");

// fs.writeFile("test.txt","This is first message ",function(err)
// { 
// 	if(err)
// 		console.log("error");
//     else
// 		console.log("Done");
// });

// fs.appendFile("test.txt"," : Second Message",(err)=>{
// 	if(err)
// 		console.log(err)
// 	else
// 		console.log("Done")
// })

// fs.readFile("test.txt",function(err,data){
// 	if(err)
// 		console.log(err)
// 	else
// 		console.log(data.toString())
// })

let file =  fs.readdir("./",async (err,files)=>{
	// this.push({fileName:files})
	
	// console.log(files,"this : ");
	// file.push("test")
	// return "test";
	await	setFile("test file");
	return "tetst is "
})

function setFile(dta){
	file = dta
}

console.log("This : ",file)



