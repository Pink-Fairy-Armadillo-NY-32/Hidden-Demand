const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
app = express();
const cookieParser = require('cookie-parser')
const sessionController = require('./controllers/sessionController')

const PORT = process.env.PORT || 3000;

//PARSE REQUEST BODY
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


//ROUTES

//MAIN PAGE - 
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '.../index.html'));
});

//get all campaigns 
app.use('/campaigns', require('./routes/campaignsRoutes'));

//get comments (using campaign id)
app.use('/campaigns/comments', require('./routes/commentsRouter'));

//LOGIN ROUTES
app.use('/login', require('./routes/loginRoutes.js'));

//SIGNUP ROUTES
app.use('/signup', require('./routes/signupRoutes'));

//delete session and cookie after user logs out (not connect to frontend at the moment)
app.post('/logout', sessionController.deleteSession,(req,res) =>{
  res.status(200).json({message:'Logged out successfully'})
})


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
 console.log(errorObj);
 return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}...`);});
