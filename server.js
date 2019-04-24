const express = require('express');
const app = express();

let host = 'localhost';
let port = process.env.port || 8080;

let animalArray = [
  {
    name: 'pig',
    noise: 'oink'
  },{
    name: 'cow',
    noise: 'moo'
  },{
    name: 'dog',
    noise: 'woof woof'
  },{
    name: 'connor',
    noise: 'uhh'
  },{
    name: 'ryan',
    noise: 'duh'
  }
];
// Visiting / should print "Hi there! Welcome to my assignment!"
app.get('/', (req,res) => {
  res.send('Hi There! Welcome to my assignment!');
});
app.get('/speak/:animal', (req,res) => {
  // /speak/pig  should print 'the pig says oink'
  // /speak/cow should print 'the cow says moo;
  // /speak/dog should print 'the dog says 'woof woof'
  console.log(req.params)
  const animalName = req.params.animal.toLowerCase();
  for (var i = 0; i < animalArray.length; i++) {
    if (animalName === animalArray[i].name) {
      return res.send(`The ${animalArray[i].name} says ${animalArray[i].noise}`);
    }
  }
  return res.send(`That animal doesn't exist.`);
});
app.get('/repeat/:string/:number', (req,res) => {
  // /repeat/hello/3 should print 'hello hello hello'
  // /repeat/hello/5 should print 'hello hello hello hello hello'
  // /repeat/blah/2 should print 'blah blah'
  console.log(req.params);
  let string = req.params.string.toLowerCase();
  let number =  parseInt(req.params.number);
  let stringToSend = '';
  for (var i = 0; i < number; i++) {
    stringToSend += ` ${string}`;
    console.log(stringToSend);
  };
  res.send(stringToSend);
});
// if a user visits any other route, print 'sorry, page not found. What are you doing with your life?'
app.get('*', (req,res) => {
  res.send('Sorry, page not found... What are you doing with your life?');
})
app.listen(port, host, () => { console.log('server listening') });