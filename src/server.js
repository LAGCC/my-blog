//This file will be the entry point for our App
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//This line parses the JSON object that we've included along with our post request
//and it adds a body property to the request parameter of whatever the matching route is 
  
app.use(express.json())// for parsing application/json
app.use(express.urlencoded({ extended: true }))// for parsing application/x-www-form-urlencoded

  
app.get('/hello', (req, res) => res.send('Hello!')); 
 
app.post('/hello', (req, res) => res.send(`hello ${req.body.name}`));

app.listen(8000, () => console.log('listening on port 8000'));