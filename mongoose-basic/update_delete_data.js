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

// Fruit.updateOne(
//   {_id: '5ebcb45c370f4217c0d3267d'}, 
//   {name: 'Nanas'}, 
//   function(error){
//     if (error) {
//       console.log(error)
//     }else{
//       console.log('Success update data.')
//     }
// })

Fruit.deleteOne(
    {_id: '5ebcaaa377bbfb071462aa81'}, 
    function(error){
      if (error) {
        console.log(error)
      }else{
        console.log('Success delete data.')
      }
  })

Fruit.find(function(error,fruits){
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name)
    })
  }
})