const mongodb = require('mongodb');
const express = require('express');
const app = express();



app.get('/thngs', function(req, res) {

  const arr = []
  
  const obj = {
    patrick : 'Hello',
    list : [ 'hello', 'world' ]
  };

  arr.push(obj)
  res.send(200, arr)
});


app.listen(9000);



// mongodb.connect('mongodb://docker:27017/jserver', function() {
//   console.log(arguments);
// })

