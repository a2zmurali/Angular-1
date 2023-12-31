

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // for Jst toekn

const fs = require('fs');

const Flight = require('./Models/flightModel');
const FlightDetails = require('./Models/flightDetail');
const FlightManager = require('./Models/FlightManager')
const Booking = require('./Models/Booking');
const User = require('./Models/User');
const app = express();
const port = 3000; // You can change this to any port you prefer
const secretkey = '5656232389745132389';

app.use(cors());

app.use(bodyParser.json());

//login


const users= [];



app.post('/createUser', (req,res) =>{
  const { _firstName, _lastName, _email, _password} = req.body;
 
  //create a new user with the provided data
  const new_user = {
    firstName: _firstName,
    lastName: _lastName,
    email: _email,
    password: _password
 };
 //  Push 
 users.push(new_user);

  /*
  const newuser = new User(_firstName,_lastName, _email, _password);
  users.push(newuser);
  */

  res.status(200).json({message: 'User Regitered successfully'});


})

app.post('/login', (req,res) => {
  const {email, password} = req.body;
  //find the user with the provided credentials

  const user = users.find((user) => user.email === email && user.password === password);

  if(user){
    const payload = {
      email:user.email
    };

    const token = jwt.sign(payload,secretkey);
    res.status(200).json({message: 'Login successful', token:token});
  }
  else{
    res.status(401).json({message:'Invalid credentials'});
  } 
});

//Middleware for authentication
/*app.use((req, res, next) => {
  const token = req.header('Authorization');  
  if(!token) return res.status(410).json({message:'Access denied. No token provided'});
  try{
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  }
  catch(ex){
    res.status(400).send({message:'Invalid Token'});
  }  
}) */

// Route to get products by category
app.get('/getUsers', (req, res) => {
  console.log('get');
  
    // If there are matching products, respond with a 200 OK status code
    res.status(200).json(users);

});




// Endpoint to provide flight source and destination data
app.get('/flights', (req, res) => {
    console.log("flights");
    let flightDetails = new FlightDetails();

    console.log(flightDetails.routePrices);
    res.json(flightDetails.routePrices);
});

// POST endpoint to handle user input
app.post('/flights', (req, res) => {
    const {
      source,
      destination,
      dateOfTravel,
      numberOfAdults,
      numberOfChildren,
      travelClass
    } = req.body;

 let flightManager = new FlightManager();
    const totalPrice = flightManager.calculatePrice(source,destination,numberOfAdults,numberOfChildren,dateOfTravel);    
    if(typeof totalPrice == 'number'){
        res.status(200).json({ totalPrice: totalPrice});
    }
    else{
        res.status(404).json(totalPrice);
    }   
  });

  app.post('/createBooking', (req,res) =>{  

    // Load existing data from the file, if any
    let existingData = [];
    try {
        const data = fs.readFileSync('data.json');
        existingData = JSON.parse(data);
    } catch (err) {
        // File doesn't exist or couldn't be read; an empty array will be used
    }

    // Push the new data into the existing array
    existingData.push(req.body);

    // Write the updated data back to the file
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    res.send({message:'Booking created successfully!'});

  })
  

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

