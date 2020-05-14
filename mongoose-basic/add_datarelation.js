const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Data name tidak ada, harap diisi.'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const peopleSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Data name tidak ada, harap diisi.'],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
})

const People = mongoose.model("People",peopleSchema);

const fruitDuku = new Fruit({
  name: 'Duku',
  rating: 7,
  review: 'manis'
});

fruitDuku.save(function(error){
  if(error){
    console.log(error);
  }else{
    console.log("Berhasil menyimpan data fruit.")
  }
})

const people = new People({
  name: 'John',
  age: 24,
  favoriteFruit: fruitDuku
});

people.save(function(error){
  if(error){
    console.log(error);
  }else{
    console.log("Berhasil menyimpan data people.")
  }
})