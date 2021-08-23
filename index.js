const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
const port = 3001;
const authCookie = 'pablov'; // change this value

app.use(cookieParser());

// cookie auth middleware
app.use((req, res, next) => {
  (req.cookies?.vincoadmin === authCookie) ? next() : res.send('unauthorized');
});

app.use('/', express.static(path.join( __dirname, 'html'), {extensions:['html']}));
//app.get('/', (req, res) => {
  //res.send('hello!');
//});

app.listen(port, ()=>{
  console.log('web server listening on port '+port);
});

