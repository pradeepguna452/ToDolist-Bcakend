const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const bodyParser = require ("body-parser") 
const routes = require ("./routes/TodoRoutes");
require('dotenv').config();


const App = express();
const PORT = 4000 ;
App.use(express.json())
App.use(cors())
App.use(bodyParser.urlencoded({extended : true}));

mongoose.
connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`successfully connected in db `);
})
.catch((err)=>{
    console.log(err);
})


App.use(routes);


App.listen(PORT,()=>{
    console.log(`connected to the ${PORT}`);
})