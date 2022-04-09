const express = require('express');
const path = require('path');
app = express();

const PORT = process.env.PORT || 3000;

//PARSE REQUEST BODY
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


//Connect to Database Here ?



//ROUTES
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/client/index.html'));
});

app.use('/login', require('./routes/loginRoutes.js'));

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
