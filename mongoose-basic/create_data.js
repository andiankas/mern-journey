const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema =  new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
})

const Fruit = mongoose.model("Fruit",fruitSchema);

// const apple = new Fruit({
//   name: 'Apple',
//   rating: 8,
//   review: 'manis'
// });

// apple.save(function(error){
//   if(error){
//     console.log(error);
//   }else{
//     console.log("berhasil menyimpan data")
//   }
// })

const jeruk = new Fruit({
  name: 'Jeruk',
  rating: 7,
  review: 'manis asam'
});

const salak = new Fruit({
  name: 'Salak',
  rating: 7.5,
  review: 'manis'
});

const alpukat = new Fruit({
  name: 'Alpukat',
  rating: 8.5,
  review: 'manis kaya nutrisi'
});

Fruit.insertMany([jeruk,salak,alpukat], function(error){
  if(error){
    console.log(error);
  }else{
    mongoose.connection.close();
    console.log("berhasil menyimpan data")
  }
})