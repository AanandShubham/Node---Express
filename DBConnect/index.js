
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host:'localhost',
  user:"root",
  password:""
})

console.log("Connectin extiblished");

console.log(await connection.execute("show databases"))
// console.log(await connection.execute("create database testdbfromnode"))
console.log(await connection.execute("drop database testdbfromnode"))
console.log(await connection.execute("show databases"))