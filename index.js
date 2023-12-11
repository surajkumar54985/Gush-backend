const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api');
const url = "mongodb+srv://suraj54985:Suraj8209@cluster0.3qu19.mongodb.net/mern?retryWrites=true&w=majority";
app.use(bodyParser.json());
app.use(cors());

app.use(apiRoutes);

const port = 3001;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// app.use(user);
//use express router
app.use('/' , require('./routes/api'));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('connected to database successfully');
        app.listen(port, (error) =>{
            if(!error)
                console.log("Server is Successfully Running, and App is listening on port "+ port)
            else 
                console.log("Error occurred, server can't start", error);
            }
        );
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
