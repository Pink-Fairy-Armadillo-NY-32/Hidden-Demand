const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
app = express();

const PORT = process.env.PORT || 3000;

//PARSE REQUEST BODY
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


//Connect to Database Here ?



//ROUTES

//MAIN PAGE - selecting sign up button will redirect to signup endpoint
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '.../index.html'));
});

//get all campaigns 
app.get('/campaigns', );

//get comments (using campaign id)
app.get('/campaigns/comments');


//LOGIN ROUTES
app.use('/login', require('./routes/loginRoutes.js'));

//SIGNUP ROUTES
app.use('/signup', require('./routes/signupRoutes'));




//ERROR HANDLING
app.use('*', (req, res) => {
 return res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
 const defaultError = {
   log: 'Error handler caught unknown middleware error',
   status: 400,
   message: {err: 'An error occured'}
 }
 const errorObj = Object.assign({}, defaultError, err);
 return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}...`);});
