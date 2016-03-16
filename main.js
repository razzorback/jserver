const express = require('express');
const app = express();
app.use(require('body-parser').json())

const DB = [];
var i = 0;

app.get('/thngs', function(req, res) {
  res.send(200, DB)
});

app.post('/thngs', function(req, res) {
  var obj = req.body;
  const err = validate(obj);
  if(!err) {
    DB.push(obj);
    obj.id = ++i;
    res.send(201, obj)
  } else {
    res.send(400, err);
  }
});

app.listen(9000);

function validate(input) { 
  if(!input) {
    return {
      error: 'Missing payload'
    }
  } else if(!input.name) {
    return {
      error : 'Missing name'
    }
  } else if(typeof input.name !== 'string') {
    return {
      error : 'Name must be a string'
    }
  } else if(input.name.length < 3) {
    return  {
      error : 'Name must have at least 3 characters.'
    } 
  } 
  return false
}
