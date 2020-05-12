// const fs = require("fs");
// fs.copyFileSync("text.txt","text2.txt");
// console.log("Copy file success")

const hero = require("superheroes");

for (let i = 0; i < 10; i++) {
  console.log(i+". "+hero.random());
}
